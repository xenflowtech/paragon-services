-- Paragon Services Database Schema
-- Run this SQL in your Supabase SQL Editor

-- Create quotes table
CREATE TABLE quotes (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  phone VARCHAR(50),
  company VARCHAR(255),
  service VARCHAR(100) NOT NULL,
  origin VARCHAR(255),
  destination VARCHAR(255),
  cargo_type VARCHAR(255),
  weight VARCHAR(100),
  message TEXT,
  status VARCHAR(50) DEFAULT 'pending',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create contacts table
CREATE TABLE contacts (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  phone VARCHAR(50),
  company VARCHAR(255),
  service VARCHAR(100),
  message TEXT NOT NULL,
  status VARCHAR(50) DEFAULT 'pending',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create services table (for reference)
CREATE TABLE services (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  description TEXT,
  icon VARCHAR(100),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Insert default services
INSERT INTO services (name, description, icon) VALUES
('Customs Clearance', 'Expert customs clearance services for all types of imports and exports', 'fas fa-clipboard-check'),
('Inland Transportation', 'Comprehensive inland transportation solutions across Pakistan', 'fas fa-truck'),
('Door to Door Service', 'Complete end-to-end logistics solutions', 'fas fa-home'),
('Air Freight', 'Fast and reliable air freight services worldwide', 'fas fa-plane'),
('Sea Freight', 'Cost-effective sea freight solutions for large shipments', 'fas fa-ship'),
('Project Management', 'Specialized project cargo management for complex shipments', 'fas fa-project-diagram'),
('Consultancy', 'Expert consultancy services for international trade and logistics', 'fas fa-user-tie');

-- Create industries table
CREATE TABLE industries (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  description TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Insert default industries
INSERT INTO industries (name, description) VALUES
('Textile Sector', 'Specialized logistics for textile and garment industry'),
('Construction Machinery', 'Heavy machinery transportation and customs clearance'),
('Sugar Plant', 'Agricultural equipment and sugar processing machinery'),
('WASA', 'Water and sanitation equipment logistics'),
('Solar Energy', 'Renewable energy equipment and components');

-- Create RLS (Row Level Security) policies
ALTER TABLE quotes ENABLE ROW LEVEL SECURITY;
ALTER TABLE contacts ENABLE ROW LEVEL SECURITY;
ALTER TABLE services ENABLE ROW LEVEL SECURITY;
ALTER TABLE industries ENABLE ROW LEVEL SECURITY;

-- Allow public read access to services and industries
CREATE POLICY "Allow public read access to services" ON services FOR SELECT USING (true);
CREATE POLICY "Allow public read access to industries" ON industries FOR SELECT USING (true);

-- Allow public insert access to quotes and contacts
CREATE POLICY "Allow public insert to quotes" ON quotes FOR INSERT WITH CHECK (true);
CREATE POLICY "Allow public insert to contacts" ON contacts FOR INSERT WITH CHECK (true);

-- Create indexes for better performance
CREATE INDEX idx_quotes_created_at ON quotes(created_at);
CREATE INDEX idx_quotes_status ON quotes(status);
CREATE INDEX idx_contacts_created_at ON contacts(created_at);
CREATE INDEX idx_contacts_status ON contacts(status);

-- Create updated_at trigger function
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Create triggers for updated_at
CREATE TRIGGER update_quotes_updated_at BEFORE UPDATE ON quotes FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_contacts_updated_at BEFORE UPDATE ON contacts FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
