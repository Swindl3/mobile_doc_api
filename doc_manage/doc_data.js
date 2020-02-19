var dbcon = require('../dbConnect')
var fs = require('fs')
var {uuid}  = require('uuidv4')

var data = {
    getGroup: async (callback) => {
        let error
        let result
        try {
            let sql = 'SELECT * FROM group_doc'
            result = await dbcon.query(sql)

        } catch (err) {
            error = err
        }
        return [error, result]
    },
    getDocFromGroupId: async (data, callback) => {
        let id = data.group_id
        console.log("Group ID is :", id)
        let error
        let result
        try {
            let sql = `SELECT * FROM document WHERE group_id = ?`
            result = await dbcon.query(sql, id)
        } catch (err) {
            error = err
        }

        return [error, result]
    },
    addGroup: async (data, callback) => {
        let values = {
            "group_name": data.group_name,
            "group_description": data.group_description
        }
        let error
        let result
        try {
            let sql = `INSERT INTO group_doc SET ?`
            result = await dbcon.query(sql, values)
        } catch (err) {
            error = err
        }
        return [error, result]
    },
    delGroup: async (data, callback) => {
        let id = data.group_id
        console.log("Group ID Delete is :", id)
        let error
        let result
        try {
            let sql_doc = `DELETE FROM document WHERE group_id = ?`
            result = await dbcon.query(sql_doc, id)
            let sql = `DELETE FROM group_doc WHERE group_id = ?`
            result = await dbcon.query(sql, id)
        } catch (err) {
            error = err
        }

        return [error, result]
    },
    addDoc: async (data, callback) => {
        let pathimg;
        // console.log("BASE64" + data.doc_picture)
        // let base64Image = data.doc_picture.split('BASE64').pop();
        let base64Image = data.doc_picture
        picture_name = uuid() + ".jpg";
        console.log(picture_name)
        pathimg = picture_name;
        fs.writeFile("./upload/" + picture_name, base64Image, { encoding: 'base64' }, function (err) {
            console.log(err)
    
        });
        let values = {
            "user_id": data.user_id,
            "group_id": data.group_id,
            "doc_picture": pathimg,
            "doc_name": data.doc_name,
            "doc_description": data.doc_description
        }
        console.log(values)
        let error
        let result
        try {
            let sql = `INSERT INTO document SET ?`
            result = await dbcon.query(sql, values)
        } catch (err) {
            error = err
        }
        return [error, result]
    },
    addUser: async (data, callback) => {
        let values = {
            "user_fname": data.user_fname,
            "user_lname": data.user_lname,
            "user_email": data.user_email,
            "user_password": data.user_password,
            "user_username": data.user_username
        }
        console.log(values)
        let error
        let result
        try {
            let sql = `INSERT INTO user SET ?`
            result = await dbcon.query(sql, values)
        } catch (err) {
            error = err
        }
        return [error, result]
    },
    getUserPassword: async (data, callback) => {
        let userName = data.user_username
        let passWord = data.user_password
        console.log("userName  ", userName)
        console.log("passWord ", passWord)
        let error
        let result
        try {
            let sql = `SELECT * FROM user WHERE user_username = ? AND user_password = ?`
            result = await dbcon.query(sql, [userName, passWord])
        } catch (err) {
            error = err
        }

        return [error, result]
    },
    editGroup: async (data , callback) => {
        let values = {
            group_name:data.group_name,
            group_description:data.group_description
        }
        let group_id = data.group_id
        console.log("group_id  :", group_id)
        console.log("group_name : ", values.group_name)
        console.log("group_description :", values.group_description)
        let error
        let result
        try {
            let sql = `UPDATE group_doc SET ? WHERE group_id=?`
            result = await dbcon.query(sql, [values, group_id])
        } catch (err) {
            error = err
        }

        return [error, result]
    }
}

module.exports = data;

// get group => id => get doc(id)