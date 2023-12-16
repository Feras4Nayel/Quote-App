var arr=
[
    {
        quote:"“Be yourself; everyone else is already taken.”",
        author:"― Oscar Wilde"
    },
    {
        quote:"“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”",
        author:"― Albert Einstein"
    },
    {
        quote:"“So many books, so little time.”",
        author:"― Frank Zappa"
    },
    {
        quote:"“A room without books is like a body without a soul.”",
        author:"― Marcus Tullius Cicero"
    },
    {
        quote:"“You only live once, but if you do it right, once is enough.”",
        author:"― Mae West"
    },
    {
        quote:"“Be the change that you wish to see in the world.”",
        author:"― Mahatma Gandhi"
    },
    {
        quote:"“In three words I can sum up everything I've learned about life: it goes on.”",
        author:"― Robert Frost"
    }
]
function display()
{
   var random=Math.floor(Math.random() * arr.length + 1 );
    document.getElementById("quote").innerHTML=arr[random].quote
    document.getElementById("author").innerHTML=arr[random].author
}