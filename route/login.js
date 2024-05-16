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


    router.post('/bookslot', async (req, res) => {
        const { email, name , phone , date , time } = req.body;
        console.log(email, name , phone , date , time );

        try {
            await db.query("INSERT INTO slot (name, email, phone , date , time) VALUES (?, ?, ? ,? ,?)", [name , email , phone , date , time]);
            res.status(200);
        } catch (error) {
            console.error("Error:", error);
            res.status(500).send('Internal server error'); 
        }
    });


    router.post('/submit_feedback', async (req, res) => {
        const { name, email, feedback } = req.body;
    
        const query = 'INSERT INTO feedback (name, email, feedback) VALUES (?, ?, ?)';
        db.query(query, [name, email, feedback], (err, result) => {
            if (err) {
                console.error(err);
                res.status(500).send('Server error');
            } else {
                res.send('Feedback submitted successfully');
            }
        });
    });



    
  
    return router;
};
