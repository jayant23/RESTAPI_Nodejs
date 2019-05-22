'user strict';
const sql = require('./db');

// Task object constructor
var Task = function(task)
{
    this.task = task.task;
    this.status = task.status;
    this.created_at = new Date();
};
Task.createTask = function createUser(newTask, result)
{
    const insertQuery = "insert into mapdata.tasks set ? ";
    sql.query(insertQuery, newTask, function(err, res){
        if(err)
        {
            console.log("error while inserting tasks", err);
            console.log(null, res.insertId);
        }
        else
        {
            console.log(res.insertId);
            result(null, res.insertId);
        }
    });
};
Task.getTaskByID = function createUser(taskId, result)
{
    const selectQuerybyId = "select task from mapdata.tasks where id = ?";
    sql.query(selectQuerybyId, taskId, function(err, res)
    {
        if(err)
        {
            console.log("error while geetting taks by taksind", err);
            console.log(err, null);
        }
        else
        {
            result(null, res);
        }
    });
};

Task.updateById = function(id, task, result)
{
    const updateQuery = "update mapdata.tasks set task = ? where id = ? ";

    sql.query(updateQuery, [task.task, id], function(err, res){
        if(err)
        {
            console.log("error while updating tasks", err);
            console.log(null, err);
        }
        else{
            result(null, res);
        };
    });
};

Task.remove = function(id, result)
{
    const deleteQuery = "delete from mapdata.tasks where id = ?";
sql.query(deleteQuery, [id], function(err, resut)
{
    if(err)
    {
        console.log("error while deleting task ", err);
        result(null, err);
    }
    else{
        result(null, resut);
    }
});
};


Task.getAllTask = function getAllTask(result) {
    sql.query("Select * from mapdata.tasks", function (err, res) {
            if(err) {
                console.log("error: ", err);
                result(null, err);
            }
            else{
              console.log('tasks : ', res);  
             result(null, res);
            }
        });   
};

module.exports = Task;