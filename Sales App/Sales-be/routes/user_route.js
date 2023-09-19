const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const UserModel = mongoose.model('UserModel');
const bcryptjs = require('bcryptjs');

//POST API for user registration

router.post('/register', (req, res) => {
    const {firstName, lastName, email, password} = req.body;
    if(!firstName || !lastName || !email || !password) {
        res.status(400).json({'error' : 'One or more mandatory fields are empty'});
    }
    UserModel.findOne({email : email})
    .then((userInDB) => {
        if(userInDB) {
            res.status(400).json({'error' : 'User with email already exists'});
        }
        bcryptjs.hash(password, 16)
        .then((hashedPassword) => {
            const user = new UserModel({firstName, lastName, email, password:hashedPassword});
            user.save()
            .then((newuser) => {
                if(newuser) {
                    res.status(201).json({'result' : 'User registered successfully' });
                }
            })
            .catch((err) => {
                console.log(err);
            })
        })
        .catch((err) => {
            console.log(err);
        })
    })
    .catch((err) => {
        console.log(err);
    })
});


//Post API for creating Login functionality

router.post('/login', (req, res) => {
    const {email, password} = req.body;
    if(!email || !password) {
       res.status(400).json({'error': 'One or more mandatory fields are empty'});
    }
    UserModel.findOne({email : email})
    .then((userInDB) => {
        if(!userInDB) {
          res.status(500).json({'error' : 'Invalid credentials'});
        }
        bcryptjs.compare(password, userInDB.password)
        .then((didMatch) => {
            if(didMatch) {
                res.status(201).json({'result' : 'User logged in successfully'});
            }else {
                res.status(401).json({'error' : 'Invalid credentials'});
            }
        })
        .catch((err) => {
            console.log(err)
        })
})
    .catch((err) => {
        console.log(err)
    })
});




module.exports = router;