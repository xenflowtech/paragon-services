require('dotenv').config();
const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
const path = require('path');
const { createClient } = require('@supabase/supabase-js');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ limit: '10mb', extended: true }));
app.use(express.static(path.join(__dirname, 'build')));

// Increase header size limit
app.use((req, res, next) => {
  req.headers['content-length'] = req.headers['content-length'] || '0';
  next();
});

// Supabase configuration
const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_ANON_KEY
);

// Email configuration (for notifications)
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER || 'paraserv@gmail.com',
    pass: process.env.EMAIL_PASSWORD
  }
});

// Quote request endpoint
app.post('/api/quote-request', async (req, res) => {
  try {
    console.log('Quote request received:', req.body);
    
    const {
      name,
      email,
      phone,
      company,
      service,
      origin,
      destination,
      cargoType,
      weight,
      message,
      timestamp
    } = req.body;

    // Validate required fields
    if (!name || !email || !service) {
      return res.status(400).json({ error: 'Missing required fields: name, email, service' });
    }

    // Insert quote into Supabase
    const { data, error } = await supabase
      .from('quotes')
      .insert([
        {
          name,
          email,
          phone,
          company,
          service,
          origin,
          destination,
          cargo_type: cargoType,
          weight,
          message,
          status: 'pending'
        }
      ])
      .select();

    if (error) {
      console.error('Supabase error:', error);
      return res.status(500).json({ error: 'Failed to save quote request' });
    }

    console.log('Quote saved to database:', data[0].id);

    // Send email notification (optional)
    try {
      const mailOptions = {
        from: process.env.EMAIL_USER || 'paraserv@gmail.com',
        replyTo: email,
        to: process.env.EMAIL_USER || 'paraserv@gmail.com',
        subject: `New Quote Request - ${name}`,
        html: `
          <h2>New Quote Request</h2>
          <p><strong>Customer Email:</strong> ${email}</p>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Company:</strong> ${company || 'Not provided'}</p>
          <p><strong>Service Required:</strong> ${service}</p>
          <p><strong>Origin:</strong> ${origin || 'Not specified'}</p>
          <p><strong>Destination:</strong> ${destination || 'Not specified'}</p>
          <p><strong>Cargo Type:</strong> ${cargoType || 'Not specified'}</p>
          <p><strong>Weight/Volume:</strong> ${weight || 'Not specified'}</p>
          <p><strong>Message:</strong></p>
          <p>${message}</p>
          <p><strong>Timestamp:</strong> ${timestamp}</p>
          <hr>
          <p><em>Reply to this email to respond directly to the customer at: ${email}</em></p>
        `
      };

      await transporter.sendMail(mailOptions);
      console.log('Email notification sent');
    } catch (emailError) {
      console.error('Email notification failed:', emailError);
      // Don't fail the request if email fails
    }

    res.status(200).json({ 
      message: 'Quote request submitted successfully',
      id: data[0].id 
    });
  } catch (error) {
    console.error('Error processing quote request:', error);
    res.status(500).json({ error: 'Failed to process quote request' });
  }
});

// Contact form endpoint
app.post('/api/contact-form', async (req, res) => {
  try {
    console.log('Contact form received:', req.body);
    
    const {
      name,
      email,
      phone,
      company,
      service,
      message,
      timestamp
    } = req.body;

    // Validate required fields
    if (!name || !email || !message) {
      return res.status(400).json({ error: 'Missing required fields: name, email, message' });
    }

    // Insert contact into Supabase
    const { data, error } = await supabase
      .from('contacts')
      .insert([
        {
          name,
          email,
          phone,
          company,
          service,
          message,
          status: 'pending'
        }
      ])
      .select();

    if (error) {
      console.error('Supabase error:', error);
      return res.status(500).json({ error: 'Failed to save contact form' });
    }

    console.log('Contact saved to database:', data[0].id);

    // Send email notification (optional)
    try {
      const mailOptions = {
        from: process.env.EMAIL_USER || 'paraserv@gmail.com',
        replyTo: email,
        to: process.env.EMAIL_USER || 'paraserv@gmail.com',
        subject: `New Contact Form Submission - ${name}`,
        html: `
          <h2>New Contact Form Submission</h2>
          <p><strong>Customer Email:</strong> ${email}</p>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
          <p><strong>Company:</strong> ${company || 'Not provided'}</p>
          <p><strong>Service:</strong> ${service || 'Not specified'}</p>
          <p><strong>Message:</strong></p>
          <p>${message}</p>
          <p><strong>Timestamp:</strong> ${timestamp}</p>
          <hr>
          <p><em>Reply to this email to respond directly to the customer at: ${email}</em></p>
        `
      };

      await transporter.sendMail(mailOptions);
      console.log('Email notification sent');
    } catch (emailError) {
      console.error('Email notification failed:', emailError);
      // Don't fail the request if email fails
    }

    res.status(200).json({ 
      message: 'Contact form submitted successfully',
      id: data[0].id 
    });
  } catch (error) {
    console.error('Error processing contact form:', error);
    res.status(500).json({ error: 'Failed to process contact form' });
  }
});

// Get all quotes (admin endpoint)
app.get('/api/quotes', async (req, res) => {
  try {
    const { data, error } = await supabase
      .from('quotes')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Supabase error:', error);
      return res.status(500).json({ error: 'Failed to fetch quotes' });
    }

    res.status(200).json(data);
  } catch (error) {
    console.error('Error fetching quotes:', error);
    res.status(500).json({ error: 'Failed to fetch quotes' });
  }
});

// Get all contacts (admin endpoint)
app.get('/api/contacts', async (req, res) => {
  try {
    const { data, error } = await supabase
      .from('contacts')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Supabase error:', error);
      return res.status(500).json({ error: 'Failed to fetch contacts' });
    }

    res.status(200).json(data);
  } catch (error) {
    console.error('Error fetching contacts:', error);
    res.status(500).json({ error: 'Failed to fetch contacts' });
  }
});

// Get services
app.get('/api/services', async (req, res) => {
  try {
    const { data, error } = await supabase
      .from('services')
      .select('*')
      .order('name');

    if (error) {
      console.error('Supabase error:', error);
      return res.status(500).json({ error: 'Failed to fetch services' });
    }

    res.status(200).json(data);
  } catch (error) {
    console.error('Error fetching services:', error);
    res.status(500).json({ error: 'Failed to fetch services' });
  }
});

// Get industries
app.get('/api/industries', async (req, res) => {
  try {
    const { data, error } = await supabase
      .from('industries')
      .select('*')
      .order('name');

    if (error) {
      console.error('Supabase error:', error);
      return res.status(500).json({ error: 'Failed to fetch industries' });
    }

    res.status(200).json(data);
  } catch (error) {
    console.error('Error fetching industries:', error);
    res.status(500).json({ error: 'Failed to fetch industries' });
  }
});

// Update quote status (admin endpoint)
app.patch('/api/quotes/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    const { data, error } = await supabase
      .from('quotes')
      .update({ status })
      .eq('id', id)
      .select();

    if (error) {
      console.error('Supabase error:', error);
      return res.status(500).json({ error: 'Failed to update quote' });
    }

    res.status(200).json(data[0]);
  } catch (error) {
    console.error('Error updating quote:', error);
    res.status(500).json({ error: 'Failed to update quote' });
  }
});

// Update contact status (admin endpoint)
app.patch('/api/contacts/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    const { data, error } = await supabase
      .from('contacts')
      .update({ status })
      .eq('id', id)
      .select();

    if (error) {
      console.error('Supabase error:', error);
      return res.status(500).json({ error: 'Failed to update contact' });
    }

    res.status(200).json(data[0]);
  } catch (error) {
    console.error('Error updating contact:', error);
    res.status(500).json({ error: 'Failed to update contact' });
  }
});

// Serve React app
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
}); 