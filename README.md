<h1>Web Semantics</h1>
<h2>What are web semantics and what are their purpose?</h2>
<p>Web Semantics is a series of standards set by the world wide web consortium(w3c) with the goal make code more reusabe and similair across the internet. A big part of web semantics is using html tags that are specific to what you are doing. For instance if you are making a navigation bar you could use divs, or an unordered list tag, but it makes it easy to tell what its purpose is with a nav tag. The purpose of web semantics is to add more of meaning to your code rather than just having divs everywhere. Having a div to wrap the content of you project so you can give it margins is a very common practice in web development so instead you could you the main tag. This tag doesn't style any differently than a div tag but it makes your html have more meaning to it.</p>

<h2>What about custom tags</h2>
<p>Custom tags are a great way to add meaning to your code. Although html5 has many tags you may find that thety do not complete fit the meaning for what you are doing, or if the code you are writing is to be used or browsers that do not support html5 you may want to create custom tags for these more semantic tags like main, section, article, nav, etc. Custom tags are a very useful tool that allow you to add more of a semantic meaning to your html as well as let you use html5 elements within earlier versions of html.</p>

<h1>DataTypes in postgreSQL</h1>
<h2>What are datatypes in postgreSQL</h2>
<p>Datatypes In postgres are used to store: booleans, numbers, and text. Each of these three categories has many datatypes within it. For example text can be stored in multiple ways. The most common is a varying character, but since you may need to store very large texts in your database you may need to use a different datatype like text that can store massive amounts of characters. Like text, there are a lot of different types of number datatypes. You have data for storing small numbers like tiny int, and for storing decimals, and integers. It is important to select the correct type of data in postgres so that you do not wasted memory inside of your server, and because postgreSQL will not allow you to insert invalid datatypes into a database.</p>
<h2>Why did I choose certain Datatypes</h2>
<h3>user table user_id<h3>
<p>For this column I chose to use the datatype of serial so that they would be auto incremented as they were added to the database. giving eachone a unique identinty. I also put a constraint on it as a primary key to keep these numbers unique as well as to index the table for quicker searches.<p>
<h3>user table user_name<h3>
<p>For the column storing the username i used a varying character with a max length of 50. I did this to limit the length of the user name as well as to allo flexable lengths.</p>
<h3>user table auth_id<h3>
<p>For the auth_id column I used a text datatype because the auth_id returned from auth0 can very frequently be very long and I didn't want to run into a problem storing oversized strings in my database.</p>
<h3>List Table list_id</h3>
<p>For this column I chose to use the datatype of serial so that they would be auto incremented as they were added to the database. giving eachone a unique identinty. I also put a constraint on it as a primary key to keep these numbers unique as well as to index the table for quicker searches.<p>
<h3>List Table title</h3>
<p>For this column I set a data type of varying character with a max length of 50. I did this because I wanted to store a brief summary of the text. With a varying character I was able to limit the length without wasting too much extra spave in the server.</p>
<h3>List Table description</h3>
<p>For this column I set a data type of varying character with a max length of 130. I did this because I wanted to store a brief desctripion of the task that was about a tweet long. With a varying character I was able to limit the length without wasting too much extra spave in the server.</p>