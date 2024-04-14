module.exports = function(db) {
    const express = require('express');
    const router = express.Router();
  
    const queryAsync = (sql, params) => new Promise((resolve, reject) => {
        db.query(sql, params, (err, results) => {
            if (err) reject(err);
            else resolve(results);
        });
    });
  
    router.post('/loginuser', async (req, res) => {
        const { email, password } = req.body;
        console.log(email, password);

        try {
            const users = await queryAsync("SELECT * FROM users WHERE email = ? ", [email]);
            if (users.length > 0) {
                const user = users[0];
                console.log(user);
                console.log(user.Password);
                org = user.Password;
                console.log(org)
                if (org === password) {
                    res.status(200).json({ loginSuccess: true });
                } else {
                    res.status(401).json({ loginSuccess: false, message: 'Invalid password' });
                }
                
            } else {
                res.status(401).send('Invalid username');
            }
        } catch (error) {
            console.error("Error:", error);
            res.status(500).send('Internal server error');
        }
    });

  
    return router;
};
