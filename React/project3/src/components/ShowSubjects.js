import { useParams } from "react-router-dom"


function ShowSubjects() {
    let {tname} = useParams() 
    let courses=[
        {
            trainer:"shafeeq",
            subject:"java"
        },
        {
            trainer:"shafeeq",
            subject:"SQL"
        },
        {
            trainer:"andy",
            subject:"HTML"
        }
    ]

    return(
        <>
            <h3> Showing Courses </h3>
            Trainer: {tname} <br/>
            Courses: <br/>
            {
                courses.filter((c)=> c.trainer==tname).map( (course)=> 
                    <>
                        {course.subject} <br/>
                    </>
                )
            }
        </>
    )
}
export default ShowSubjects