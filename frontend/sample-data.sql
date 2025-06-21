-- Sample Fund Vaults for Testing
-- Insert sample disaster relief fund vaults

INSERT INTO fund_vaults (vault_name, disaster_type, location, description, total_amount, allocated_amount, remaining_amount, status) VALUES
(
  'Turkey-Syria Earthquake Relief Fund',
  'earthquake',
  'Turkey & Syria',
  'Emergency relief fund for the devastating 7.8 magnitude earthquake that struck Turkey and Syria in February 2023, affecting millions of people.',
  5000000.00,
  1200000.00,
  3800000.00,
  'active'
),
(
  'Pakistan Flood Recovery Fund',
  'flood',
  'Pakistan',
  'Support fund for communities affected by the catastrophic flooding in Pakistan that submerged one-third of the country.',
  3500000.00,
  800000.00,
  2700000.00,
  'active'
),
(
  'Hurricane Ian Relief Fund',
  'hurricane',
  'Florida, USA',
  'Relief fund for Hurricane Ian victims in Florida, providing emergency shelter, food, and rebuilding assistance.',
  2800000.00,
  1100000.00,
  1700000.00,
  'active'
),
(
  'Morocco Earthquake Emergency Fund',
  'earthquake',
  'Morocco',
  'Emergency response fund for the 6.8 magnitude earthquake that struck Morocco''s Atlas Mountains region.',
  2200000.00,
  400000.00,
  1800000.00,
  'active'
),
(
  'Maui Wildfire Recovery Fund',
  'wildfire',
  'Hawaii, USA',
  'Recovery fund for the devastating wildfires in Maui, Hawaii, supporting displaced families and community rebuilding.',
  4100000.00,
  900000.00,
  3200000.00,
  'active'
),
(
  'Libya Flood Emergency Fund',
  'flood',
  'Libya',
  'Emergency relief fund for the catastrophic flooding in Derna and eastern Libya caused by Storm Daniel.',
  1800000.00,
  300000.00,
  1500000.00,
  'active'
),
(
  'Afghanistan Earthquake Relief',
  'earthquake',
  'Afghanistan',
  'Humanitarian aid fund for earthquake victims in Afghanistan, providing medical care, shelter, and essential supplies.',
  1500000.00,
  200000.00,
  1300000.00,
  'active'
),
(
  'Australian Bushfire Recovery',
  'wildfire',
  'Australia',
  'Long-term recovery fund for communities affected by severe bushfires across multiple Australian states.',
  3300000.00,
  1500000.00,
  1800000.00,
  'active'
),
(
  'Philippines Typhoon Relief',
  'typhoon',
  'Philippines',
  'Relief fund for typhoon-affected communities in the Philippines, focusing on emergency response and recovery.',
  2600000.00,
  700000.00,
  1900000.00,
  'active'
),
(
  'Ukraine Humanitarian Crisis Fund',
  'conflict',
  'Ukraine',
  'Humanitarian aid fund supporting displaced families and communities affected by the ongoing conflict in Ukraine.',
  8500000.00,
  3200000.00,
  5300000.00,
  'active'
); 