using ConsumeWebAPi.Models;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using System.Runtime.CompilerServices;
using System.Text;
using System.Text.Json.Nodes;

namespace ConsumeWebAPi.Controllers
{
    public class StudentController : Controller
    {
        private string url = "https://localhost:7083/api/StudentApi/";
            private HttpClient client = new HttpClient();
        [HttpGet]
        public IActionResult Index()
        {
            List<Student> students = new List<Student>();   
            HttpResponseMessage response = client.GetAsync(url).Result;
            if(response.IsSuccessStatusCode) {
            string res= response.Content.ReadAsStringAsync().Result;
                var data= JsonConvert.DeserializeObject<List<Student>>(res);  
                if(data != null )
                {
                    students = data;
                    return View(students);
                }

            }
            return View();
        }
        public IActionResult create() { 
            return View();
        }
        [HttpPost]
        public IActionResult create(Student std) {
            string data=JsonConvert.SerializeObject(std);
            StringContent content = new StringContent(data ,Encoding.UTF8,"application/json");
            HttpResponseMessage responseMessage= client.PostAsync(url, content).Result;
            if(responseMessage.IsSuccessStatusCode) {
                TempData["InsertMessage"] = "Data Save SuccessFully";
                return RedirectToAction("Index");
            }

            return View();
        }
        [HttpGet]
        public IActionResult Edit(int id){

            Student student = new Student();
            HttpResponseMessage httpResponse = client.GetAsync(url+id).Result;
            if(httpResponse.IsSuccessStatusCode)
            {
                string res=httpResponse.Content.ReadAsStringAsync().Result;
                var data= JsonConvert.DeserializeObject<Student>(res);    
                if(data != null )
                {
                    student = data;
                }
            }
                return View(student);
        }
        [HttpPost]
        public IActionResult Edit(Student std) {

            string data = JsonConvert.SerializeObject(std);
            StringContent content = new StringContent (data ,Encoding.UTF8,"application/json");
            HttpResponseMessage res=client.PutAsync(url, content).Result;   
            if(res.IsSuccessStatusCode)
            {
                TempData["UpdateMessage"] = "Student Data update Sucessfully";
                return RedirectToAction("Index");   
            }
            return View();
        
        }
        [HttpGet]
        public IActionResult Details(int id)
        {
            Student student=new Student();
            HttpResponseMessage resp=client.GetAsync(url+id).Result;
            if(resp.IsSuccessStatusCode)
            {
                string result= resp.Content.ReadAsStringAsync().Result;
                var data= JsonConvert.DeserializeObject<Student>(result);
                if(data != null ) { student = data;}
            }
                return View(student);
        }
        public IActionResult Delete(int id)
        {
            Student student=new Student();
            HttpResponseMessage resp= client.GetAsync(url+id).Result;
            if(resp.IsSuccessStatusCode)
            {
                string res= resp.Content.ReadAsStringAsync().Result;
                var data = JsonConvert.DeserializeObject<Student>(res);
                if (data != null)
                {
                    student = data;
                }
            }
                return View(student);
        }
        [HttpPost,ActionName("Delete")]
        public IActionResult deleteConfirm(int id)
        {
           // HttpResponseMessage res= client.DeleteAsync(url+ id).Result;
            HttpResponseMessage res= client.DeleteAsync("https://localhost:7083/api/StudentApi?id="+ id).Result;
            if(res.IsSuccessStatusCode)
            {
                TempData["delteMessage"] = "delete Message";
                return RedirectToAction("Index");
            }
            return View();
        }

    }
}
