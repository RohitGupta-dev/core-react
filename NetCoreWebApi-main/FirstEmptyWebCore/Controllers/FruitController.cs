using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace FirstEmptyWebCore.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class FruitController : ControllerBase
    {
        public List<string> fruit = new List<string>() {
        "apple","banana","grapes","papaya","Mango","cherry"
        };
        [HttpGet]
        public List<string> GetFruits()
        {
            return fruit;
        }
        [HttpGet("{id}")]
        public string GetFruits(int id)
        {
            for (int i = 0; i < fruit.Count; i++)
            {
                if (i == id)
                {
                    return fruit[i];
                }
            }
            return "";
        }


    }
}
