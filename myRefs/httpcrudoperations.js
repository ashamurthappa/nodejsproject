
const express = require('express')
const Joi = require('joi'); //to do validations forpost requests
const app = express();

const courses = [
    {id: 1 , name : 'course1'},
    {id: 2 , name : 'course2'},
    {id: 3 , name : 'course3'}
]

app.use(express.json()); //when we start using post methods

//http get methods
app.get('/', (req,res)=>{ // //http://localhost:5000/
    res.send('Hello world123!!!')
});
app.get('/api/courses', (req,res)=>{  //http://localhost:5000/api/courses
    res.send(courses)
});

//nodemon index --> listen to the changes in the file and restart the server so no need to rerun by using node index anymore
//just use nodemon filename

app.get('/api/courses/:id', (req,res)=>{  //http://localhost:5000/api/courses/3  
    let course = courses.find(c => c.id === parseInt(req.params.id));
    if(!course){ // say 404 not found
        res.status(404).send('The course with given ID was not found')
    }else{
        res.send(course)
    }
});
///end get 

//http post methods
app.post('/api/courses', (req,res)=>{ 
    const schema = {
        name : Joi.string().min(3).required()
    }
    const result =  Joi.validate(req.body, schema);
    //console.log(result); //result is 
    // {
    //     error: null,
    //     value: {name: 'new course'},
    //     then : [Function : then]
    //     catch: [Function : catch]
    // }
   
    
    if(result.error){ //after using Joi --> commenting the below if case manual validation
        //400 bad request
        res.status(400).send(result.error.details[0].message); //"name is required "
        return;
    }

    // if(!req.body.name || req.body.length < 3)  { //this is manual process of validating the req we receive instead we use Joi package 
    //     //400 bad request
    //     res.status(400).send("Name is required and should be min 3 chars..");
    //     return;
    // }

    
    const course = {
        id: courses.length + 1,
        name: req.body.name
    }
    courses.push(course);
    res.send(course);
});
//end post



//handing put request
app.put('/app/courses/:id', (req, res) =>{
    //look up the course
    //if not exists return 404
    let course = courses.find(c => c.id === parseInt(req.params.id));
    if(!course){ // say 404 not found
       return res.status(404).send('The course with given ID was not found')
       //return is for exit the function
    }

    //validate
    //if validate, return 400 bad request   
    //const result =  validateCourse(req.body); //or below line 
    const { error } =  validateCourse(req.body); //equals "result.error" is nothign but object destructuring 
    if(error){ 
        //400 bad request
        return res.status(400).send(result.error.details[0].message); //"name is required "    
    }

    //update the course
    //return the updated course
    course.name = req.body.name;
    res.send(course)
})
//end put usage


//http delete request usage
app.delete('/api/courses/:id', (req, res) =>{
    //look up the course
    //if not exists return 404
    let course = courses.find(c => c.id === parseInt(req.params.id));
    if(!course){ // say 404 not found
        return res.status(404).send('The course with given ID was not found')
    }

    //delete
    const index = courses.indexOf(course)
    courses.splice(index, 1);
    
    //return the same course
    res.send(course)
} )

//end delete usage


//common validation function
function validateCourse(course){
    const schema = {
        name : Joi.string().min(3).required()
    }

    return Joi.validate(course,schema)
}
//end


const port = process.env.PORT || 3000
//to set port --> set PORT=5000
///in server it dynamically take port number or default 3000 as mentioned here
app.listen(port, () => console.log(`Listening to port ${port}...`));




// app.post();
// app.put();
// app.delete();
