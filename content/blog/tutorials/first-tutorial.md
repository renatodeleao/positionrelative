---
title: "Naming typography patterns in CSS"
date: 2019-11-28T19:06:04Z
draft: true
excerpt: "we’ve welcomed students from Harvard and MIT, and just brought on board residents"
---

## Vamos
So far, we’ve welcomed students from Harvard and MIT, and just brought on board residents from two rather different institutions: alumni of Moscow’s Strelka Institute and a current student at Barcelona’s Institute for Advanced Architecture of Catalonia (IAAC)’s Master in Design for Emergent Futures (MDEF) programme. Because to us, working with academic institutions doesn’t just mean choosing the ones with the best reputations and proven track records of success (although that’s great, too): it’s about seeking out the schools and programmes which are reshaping education with the future in mind and embracing cross-disciplinary innovation — much like we do. ‘MDEF is a program that brings students, faculty, companies, and organisations together to design together emergent futures for our ecosystems, technology, and society,’ says MDEF Program Director Tomás Díez. ‘We believe in radical experimentation and prototyping in the real world — something that we have explored with SPACE10 in the past. Now, we are working together on creating an educational program needed for the challenges of our time through collaboration at scale and open-source philosophy at heart.’ 
<br/>
<br/>

While sourcing new perspectives from schools which inspire us is important, it shouldn’t be the only way for us to invite residents into SPACE10 to share their ideas with us. That wouldn’t be very democratic — which is why we always put out an Open Call for residents alongside sourcing talent from the academic world. With our Open Call, anyone can apply; that means non-students, too. All that it takes is a bright idea that can answer one of our loosely-framed briefs. The Open Call has enabled us to work with people who come from different backgrounds and different places around the world, and have cultivated their interests in wildly diverse ways; to date, we’ve worked with people from Germany, India and Singapore, just to name a few places. (PS: if you’re interested, we’re releasing an Open Call for residents tomorrow.)


Hello from Hugo! If you're reading this in your browser, good job! The file `content/post/hello-hugo.md` has been
converted into a complete HTML document by Hugo. Isn't that pretty nifty?

A Section
---------

Here's a simple titled section where you can place whatever information you want.

You can use inline HTML if you want, but really there's not much that Markdown can't do.

Showing off with Markdown
-------------------------

A full cheat sheet can be found [here](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)
or through [Google](https://google.com/).

There are some *easy* examples for styling, though. I can't **emphasize** that enough.
Creating [links](https://google.com/) or <code>inline code</code> blocks are very straightforward.

```text
There are some *easy* examples for styling, though. I can't **emphasize** that enough.
Creating [links](https://google.com/) or `inline code` blocks are very straightforward.
```

<h2>Code <small>subtitle</small></h2>

This is the meta data for this post. It is located at the top of the `content/post/hello-hugo.md` markdown file.

```html
<div class="test"></div>
```

```scss
.test {
	&:hover {
		color: red;
		@include someMixin();

		@mappy-bp(max sm) {
			// else
		}
	}
}
```
```js
export const myCenas = (args) => {
	 return args.map(a => console.log(a))
}

// comment
document.addEventListener('cenas', myCenas)
```
This section, called 'Front Matter', is what tells Hugo about the content in this file: the `title` of the item, the
`description`, and the `date` it was posted. In our example, we've added two custom bits of data too. The `categories` and
`tags` sections are used in this example for indexing/grouping content. You will learn more about what that means by
examining the code in this example and through reading the Hugo [documentation](http://gohugo.io/overview/introduction).
