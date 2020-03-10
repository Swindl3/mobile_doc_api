var express = require('express');
var route = express.Router();
var resp = require('../formatRes');
var data = require('./doc_data');

route.post('/getgroup', async (req, res) => {
    res.set({ 'content-type': 'application/json; charset=utf-8' });
    let [error, result] = await data.getGroup(req.body)
    let response;
    if (error) {
        response = resp.error(error)
    } else {
        response = resp.success(result, "Success to get group")
        console.log(response)
    }
    resp.sending(req, res, response)
})
route.post('/editgroup', async (req, res) => {
    res.set({ 'content-type': 'application/json; charset=utf-8' });
    let [error, result] = await data.editGroup(req.body)
    let response
    if (error) {
        response = resp.error(error)
    } else {
        response = resp.success(result, "Success to update group doc")
    }
    resp.sending(req, res, response)
})
route.post('/editdoc', async (req, res) => {
    res.set({ 'content-type': 'application/json; charset=utf-8' });
    let [error, result] = await data.editDoc(req.body)
    let response
    if (error) {
        response = resp.error(error)
    } else {
        response = resp.success(result, "Success to update group doc")
    }
    resp.sending(req, res, response)
})
route.post('/getdoc', async (req, res) => {
    res.set({ 'content-type': 'application/json; charset=utf-8' });
    let [error, result] = await data.getDocFromGroupId(req.body)
    let response
    if (error) {
        response = resp.error(error)
    } else {
        response = resp.success(result, "Success to get document")
    }
    resp.sending(req, res, response)
})
route.post('/addgroup', async (req, res) => {
    res.set({ 'content-type': 'application/json; charset=utf-8' });
    let [error, result] = await data.addGroup(req.body)
    let response
    if (error) {
        response = resp.error(error)
    } else {
        response = resp.success(result, "Success to add group doc")
    }
    resp.sending(req, res, response)
})
route.post('/delgroup', async (req, res) => {
    res.set({ 'content-type': 'application/json; charset=utf-8' });
    let [error, result] = await data.delGroup(req.body)
    let response
    if (error) {
        response = resp.error(error)
    } else {
        response = resp.success(result, "Success to del group doc")
    }
    resp.sending(req, res, response)
})
route.post('/deldoc', async (req, res) => {
    res.set({ 'content-type': 'application/json; charset=utf-8' });
    let [error, result] = await data.delDoc(req.body)
    let response
    if (error) {
        response = resp.error(error)
    } else {
        response = resp.success(result, "Success to del doc")
    }
    resp.sending(req, res, response)
})
route.post('/adddoc', async (req, res) => {
    res.set({ 'content-type': 'application/json; charset=utf-8' });
    let [error, result] = await data.addDoc(req.body)
    let response
    if (error) {
        response = resp.error(error)
    } else {
        response = resp.success(result, "Success to add  document")
    }
    resp.sending(req, res, response)
})
route.post('/adduser', async (req, res) => {
    res.set({ 'content-type': 'application/json; charset=utf-8' });
    let [error, result] = await data.addUser(req.body)
    let response
    if (error) {
        response = resp.error(error)
    } else {
        response = resp.success(result, "Success to add user")
    }
    resp.sending(req, res, response)

})
route.post('/login', async (req, res) => {
    res.set({ 'content-type': 'application/json; charset=utf-8' });
    let [error, result] = await data.getUserPassword(req.body)
    let response
    console.log("result", result)
    if (result == null || !result || result.length == 0 || error) {
        let msg = "Wrong username or password"
        response = resp.error(msg)
    } else {
        response = resp.success(result, "Success to login")
    }
    resp.sending(req, res, response)
})
route.post('/getuser', async (req, res) => {
    res.set({ 'content-type': 'application/json; charset=utf-8' });
    let [error, result] = await data.getUser(req.body)
    let response
    if (error) {
        response = resp.error(error)
    } else {
        response = resp.success(result, "Success to get user")
    }
    resp.sending(req, res, response)
})
route.post('/getgroupuser', async (req, res) => {
    res.set({ 'content-type': 'application/json; charset=utf-8' });
    let [error, result] = await data.getGroupUser(req.body)
    let response
    if (error) {
        response = resp.error(error)
    } else {
        response = resp.success(result, "Success to get group user")
    }
    resp.sending(req, res, response)
})
route.post('/creategroupuser', async (req, res) => {
    res.set({ 'content-type': 'application/json; charset=utf-8' });
    let [error, result] = await data.createGroupUser(req.body)
    let response
    if (error) {
        response = resp.error(error)
    } else {
        response = resp.success(result, "Success to create group user")
    }
    resp.sending(req, res, response)
})
route.post('/createuserdoc', async (req, res) => {
    res.set({ 'content-type': 'application/json; charset=utf-8' });
    let [error, result] = await data.createUserDoc(req.body)
    let response
    if (error) {
        response = resp.error(error)
    } else {
        response = resp.success(result, "Success to create user doc")
    }
    resp.sending(req, res, response)
})
route.post('/delgroupuser', async (req, res) => {
    res.set({ 'content-type': 'application/json; charset=utf-8' });
    let [error, result] = await data.delGroupUser(req.body)
    let response
    if (error) {
        response = resp.error(error)
    } else {
        response = resp.success(result, "Success to del group user")
    }
    resp.sending(req, res, response)

})
route.post('/getuseroutsidegroup', async (req, res) => {
    res.set({ 'content-type': 'application/json; charset=utf-8' });
    let [error, result] = await data.getUserOutsideGroup(req.body)
    let response
    if (error) {
        response = resp.error(error)
    } else {
        response = resp.success(result, "Success to get  user outside group")
    }
    resp.sending(req, res, response)

})
route.post('/getuseringroup', async (req, res) => {
    res.set({ 'content-type': 'application/json; charset=utf-8' });
    let [error, result] = await data.getUserInGroup(req.body)
    let response
    if (error) {
        response = resp.error(error)
    } else {
        response = resp.success(result, "Success to get  user in group")
    }
    resp.sending(req, res, response)

})
route.post('/editgroupname', async (req, res) => {
    res.set({ 'content-type': 'application/json; charset=utf-8' });
    let [error, result] = await data.editGroupName(req.body)
    let response
    if (error) {
        response = resp.error(error)
    } else {
        response = resp.success(result, "Success to edit group name")
    }
    resp.sending(req, res, response)

})
route.post('/deluser', async (req, res) => {
    res.set({ 'content-type': 'application/json; charset=utf-8' });
    let [error, result] = await data.delUserFromGroup(req.body)
    let response
    if (error) {
        response = resp.error(error)
    } else {
        response = resp.success(result, "Success to del user from group ")
    }
    resp.sending(req, res, response)

})
route.post('/checkduplicate', async (req, res) => {
    res.set({ 'content-type': 'application/json; charset=utf-8' });
    let [error, result] = await data.checkDuplicateUser(req.body)
    let response
    if (error) {
        response = resp.error(error)
    } else {
        response = resp.success(result, "Success to check dup ")
    }
    resp.sending(req, res, response)

})
module.exports = route;