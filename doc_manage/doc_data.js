var dbcon = require('../dbConnect')
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
    getDocFromGroupId:async (data,callback) =>{
        let id = data.group_id
        console.log("Group ID is :", id)
        let error
        let result
        try {
            let sql = `SELECT * FROM document WHERE group_id = ?`
            result = await dbcon.query(sql,id)
        }catch(err) {
            error = err
        }

        return [error,result]
    },
    addGroup: async (data,callback) => {
        let values = {
            "group_name" : data.group_name,
            "group_description":data.group_description
        }
        let error
        let result 
        try {
            let sql = `INSERT INTO group_doc SET ?`
            result = await dbcon.query(sql,values)
        }catch(err){
            error = err
        }
        return [error,result] 
    },
    delGroup:async (data,callback)=>{
        let id = data.group_id
        console.log("Group ID Delete is :", id)
        let error
        let result
        try {
            let sql_doc = `DELETE FROM document WHERE group_id = ?`
            result = await dbcon.query(sql_doc,id)
            let sql = `DELETE FROM group_doc WHERE group_id = ?`
            result = await dbcon.query(sql,id)
        }catch(err) {
            error = err
        }

        return [error,result]
    },
    addDoc: async (data,callback) => {
        let values = {
            "user_id" : data.user_id,
            "group_id":data.group_id,
            "doc_picture":data.doc_picture,
            "doc_name":data.doc_name,
            "doc_description":data.doc_description
        }
        console.log(values)
        let error
        let result 
        try {
            let sql = `INSERT INTO document SET ?`
            result = await dbcon.query(sql,values)
        }catch(err){
            error = err
        }
        return [error,result] 
    },
    addUser: async (data,callback) => {
        let values = {
            "user_fname": data.user_fname,
            "user_lname":data.user_lname,
            "user_email":data.user_email,
            "user_password":data.user_password,
            "user_username":data.user_username
        }
        console.log(values)
        let error
        let result 
        try {
            let sql = `INSERT INTO user SET ?`
            result = await dbcon.query(sql,values)
        }catch(err){
            error = err
        }
        return [error,result] 
    }
}

module.exports = data;

// get group => id => get doc(id)