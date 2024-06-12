using CreateWebApiCrud.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace CreateWebApiCrud.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class StudentApiController : ControllerBase
    {
        public Test1Context Context { get; }
        public StudentApiController(Test1Context context) {
            Context = context;
        }
        [HttpGet]
        public async Task<ActionResult<List<Student>>> GetStudents()
        {
            var data= await Context.Students.ToListAsync();
            return Ok(data);
        }
        [HttpGet("{id}")]
        public async Task<ActionResult<Student>> GetStudentById(int id)
        {
            var data= await Context.Students.FindAsync(id);
            if(data==null)  
                NotFound();
            return data;
        }
        [HttpPost]
        public async Task<ActionResult<Student>> CreateStudent(Student student)
        {
            if(student==null)
                NotFound() ;
            await Context.Students.AddAsync(student);
            await Context.SaveChangesAsync();
            return Ok(student);
        }
        [HttpPut]
        public async Task<ActionResult<Student>> UpdateStudent(int id,Student student)
        {
            if (student.Id != id)
            {
                BadRequest();

            }
          //  Context.Students.Update(student);
            Context.Entry(student).State=EntityState.Modified;
            await Context.SaveChangesAsync();
            return Ok(student);
        }[HttpDelete]
        public async Task<ActionResult<Student>> deleteStudent(int id)
        {
           var std= await Context.Students.FindAsync(id);  
           Context.Students.Remove(std);
          //  Context.Entry(std).State=EntityState.Deleted;
            await Context.SaveChangesAsync();
            return Ok(std);
        }
    }
}
