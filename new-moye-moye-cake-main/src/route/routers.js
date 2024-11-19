router.post('/submitForm', (req, res) => {
    const { name, email, message } = req.body;
  
    // Insert data into MySQL database
    const sql = 'INSERT INTO user_data (name, email, message) VALUES (?, ?, ?)';
    connection.query(sql, [name, email, message], (err, result) => {
      if (err) {
        console.error('Error inserting data:', err);
        res.status(500).json({ error: 'An error occurred while inserting data.' });
      } else {
        res.status(200).json({ message: 'Data inserted successfully.' });
      }
    });
  });
  