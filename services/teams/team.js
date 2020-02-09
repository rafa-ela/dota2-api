/********
* teams.js file (services/teams)
********/


const express = require('express');
// const User = require('../../models/user');

const getAllTeams = async (req, res, next) => {
    let teamNames = { "secret": {"names":"zai, puppey, nisha, matumbaman, yapzor"} };
    return res.status(200).json({
        'message': 'List of all professional Dota2 teams',
        'data': teamNames
    });

    // TODO: use code below when integrating with DB
    // try {

    //     let users = await User.find({});

    //     if (users.length > 0) {
    //         return res.status(200).json({
    //             'message': 'users fetched successfully',
    //             'data': users
    //         });
    //     }

    //     return res.status(404).json({
    //         'code': 'BAD_REQUEST_ERROR',
    //         'description': 'No users found in the system'
    //     });
    // } catch (error) {
    //     return res.status(500).json({
    //         'code': 'SERVER_ERROR',
    //         'description': 'something went wrong, Please try again'
    //     });
    // }
}

const getTeamByName = async (req, res, next) => {
    try {
        let teamName = req.params.name;
        if (teamName == "secret") {
            return res.status(200).json({
                'message': `team with name ${teamName} fetched successfully`,
                'data': "TBD"
            });
        }

        return res.status(404).json({
            'code': 'BAD_REQUEST_ERROR',
            'description': 'No users found in the system'
        });

    } catch (error) {

        return res.status(500).json({
            'code': 'SERVER_ERROR',
            'description': 'something went wrong, Please try again'
        });
    }
}

const getByRegion = async (req, res, next) => {
	try {
		let region = req.params.region
		return res.status(200).json({
			'message': `Teams in the ${region} region fetched successfully`,
			'data': "sea_teams:{teams:'Fnatic', 'TNC', 'Mineski'}"
		});

	} catch(error) {
		console.log(error)
		return res.status(500).json({
			'code': 'SERVER_ERROR',
			'description': 'something went wrong, Please try again'
	});
	}
}

const getBestTeam = async (req, res, next) => {
	try {
		return res.status(200).json({
			'message': 'The best team in the Dota2 professional scene',
			'data': "Evil Geniuses!!! (EG)"
		});

	} catch(error) {

		return res.status(500).json({
			'code': 'SERVER_ERROR',
			'description': 'something went wrong, Please try again'
	});
	}
}

// const createUser = async (req, res, next) => {
//     try {

//         const {
//             name,
//             email
//         } = req.body;

//         if (name === undefined || name === '') {
//             return res.status(422).json({
//                 'code': 'REQUIRED_FIELD_MISSING',
//                 'description': 'name is required',
//                 'field': 'name'
//             });
//         }

//         if (email === undefined || email === '') {
//             return res.status(422).json({
//                 'code': 'REQUIRED_FIELD_MISSING',
//                 'description': 'email is required',
//                 'field': 'email'
//             });
//         }


//         let isEmailExists = await User.findOne({
//             "email": email
//         });

//         if (isEmailExists) {
//             return res.status(409).json({
//                 'code': 'ENTITY_ALREAY_EXISTS',
//                 'description': 'email already exists',
//                 'field': 'email'
//             });
//         }

//         const temp = {
//             name: name,
//             email: email
//         }

//         let newUser = await User.create(temp);

//         if (newUser) {
//             return res.status(201).json({
//                 'message': 'user created successfully',
//                 'data': newUser
//             });
//         } else {
//             throw new Error('something went worng');
//         }
//     } catch (error) {
//         return res.status(500).json({
//             'code': 'SERVER_ERROR',
//             'description': 'something went wrong, Please try again'
//         });
//     }
// }

// const updateUser = async (req, res, next) => {
//     try {


//         const userId = req.params.id;

//         const {
//             name,
//             email
//         } = req.body;

//         if (name === undefined || name === '') {
//             return res.status(422).json({
//                 'code': 'REQUIRED_FIELD_MISSING',
//                 'description': 'name is required',
//                 'field': 'name'
//             });
//         }

//         if (email === undefined || email === '') {
//             return res.status(422).json({
//                 'code': 'REQUIRED_FIELD_MISSING',
//                 'description': 'email is required',
//                 'field': 'email'
//             });
//         }


//         let isUserExists = await User.findById(userId);

//         if (!isUserExists) {
//             return res.status(404).json({
//                 'code': 'BAD_REQUEST_ERROR',
//                 'description': 'No user found in the system'
//             });
//         }

//         const temp = {
//             name: name,
//             email: email
//         }

//         let updateUser = await User.findByIdAndUpdate(userId, temp, {
//             new: true
//         });

//         if (updateUser) {
//             return res.status(200).json({
//                 'message': 'user updated successfully',
//                 'data': updateUser
//             });
//         } else {
//             throw new Error('something went worng');
//         }
//     } catch (error) {

//         return res.status(500).json({
//             'code': 'SERVER_ERROR',
//             'description': 'something went wrong, Please try again'
//         });
//     }
// }

// const deleteUser = async (req, res, next) => {
//     try {
//         let user = await User.findByIdAndRemove(req.params.id);
//         if (user) {
//             return res.status(204).json({
//                 'message': `user with id ${req.params.id} deleted successfully`
//             });
//         }

//         return res.status(404).json({
//             'code': 'BAD_REQUEST_ERROR',
//             'description': 'No users found in the system'
//         });

//     } catch (error) {

//         return res.status(500).json({
//             'code': 'SERVER_ERROR',
//             'description': 'something went wrong, Please try again'
//         });
//     }
// }

module.exports = {
    getAll: getAllTeams,
		getByName: getTeamByName,
		getBestTeam: getBestTeam,
		getByRegion: getByRegion,
    // createUser: createUser,
    // updateUser: updateUser,
    // deleteUser: deleteUser
}