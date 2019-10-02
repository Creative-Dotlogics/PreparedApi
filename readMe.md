# PREPARED API

Prepared is the worlds unbeatable API that houses over 3 billion questions for college students, sorted into courses and topics. The relevance of prepared cannot be ignored. Built for all developers. Prepared gives you the freedom to handle answer checking in your application or you could rely on us to handle that and return to you whether the user chose a correct answer. With Prepared you can build a very robust and content appreciable quiz application to help a college in your nation or vicinity.

##How to use Prepared?
We would go over all the possibilities of our API in this documentation. Just sit back, relax and make sure you finish this documentation. But if you are already a pro developer and know how to deal with API's then `Hello world`.

>Our API is queried with course codes instead of course titles since every college has different course codes.

### Courses &amp; Course codes

|Course|Level|Course Code|
|------|-----|-----------|
|Information Technology| 100| ITS101|

This table does not contain all the courses we have. We figured that would be so difficult to use so we created a Search Engine to help you. click the link below to use the search engine instead.

 [Course Code Search Engine](find.prepared.com "Find the course code")



###Programming Languages

|Programming Languages|
|---------------------|
|JavaScript|
|Python|
|PHP|
|C#|

`Lets see how you could make API calls to our api with all these languages`

#### JavaScript
using the fetch API
```JavaScript
  fetch(`api.prepared.com/courses/${courseCode}/${limit}`)
  .then(data=>data.json())
  .then((result)=>{
    //at this point your result is ready and you can start pulling the questions into your Application
    console.log(result);
  })
  .catch(err=>console.log(err))
```
Let's explain the above code in bits

```JavaScript
fetch(`api.prepared.com/courses/${courseCode}/${limit}`)
```

The `fetch API` returns a promise, hence it allows you to chain the `.then` method to it and any parameter you pass the `.then` method would hold the data the `fetch API` returned. At your first `.then` method you must be sure to parse the data returned as JSON data.

```JavaScript
.then(data=>data.json())
```
the above code parses our data returned as JSON and finally you could get the result in the last `.then` method.

```JavaScript
.then(result=>console.log(result))
```
you could start using our API after this


##### Result
```JSON
{
    "count": 1,
    "result": [
        {
            "_id": "5c9a1fa30ed7330844302333",
            "courseCode": "AGN205",
            "questions": [
                {
                    "options": [
                        "Adds extra life to me",
                        "changes our economy",
                        "i don't know",
                        "aids movement"
                    ],
                    "_id": "5c9a1fa30ed7330844302334",
                    "question": "What is the function of bones?",
                    "answer": 3,
                    "explaination": "No explaination"
                }
            ]
        }
    ]
}
```

```JavaScript
.catch(err=>console.log(err))
```
the `.catch` method is very useful for catching errors. Always be sure to use it so that if you are not getting the same result you would know where and what the problem is.
# Prepared API
