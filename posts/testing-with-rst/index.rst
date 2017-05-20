.. title: Testing With RST
.. slug: testing-with-rst
.. date: 2017-05-07 14:59:44 UTC-07:00
.. tags: processing p5 nikola
.. category: howto
.. link: 
.. description: A re-post to make sure I can get the site working.
.. type: text

This is a re-do of an `old post <https://necromuralist.github.io/posts/processing-test/>`_ I made to `my main site <https://necromuralist.github.io/>`_ about making a `p5 <http://p5js.org/>`_ restructured-text post in `nikola <https://www.getnikola.com/handbook.html>`_ based on the p5 `get started <http://p5js.org/get-started/>`_ tutorial. I'm repeating it to make sure I can get it to work here, since it's been so long since I've done it.

First the link to the p5 code:

.. code:: html

   <script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.5.10/p5.min.js"></script>

.. note:: On the old post I had included the html tag directly in the post (using the ``.. raw::`` directive), but I thought that would be wasteful since you can have multiple posts on one page so I moved it the the ``BODY_END`` variable in the ``conf.py`` file which adds it to the end of the HTML body. This seemed to work for the first sketch but when I moved to the ``instance-mode`` version (see below) it broke (probably because `p5` wasn't loaded when I was trying to create an instance of it) so I moved it to ``EXTRA_HEAD_DATA`` which so far seems to work. I also experimented with the `meta-template plugin <https://plugins.getnikola.com/v7/meta_template/>`_ but since this repository is all about using P5, that didn't seem the way to go, since it would basically have the same problem as using the ``.. raw::`` directive (which is really doing the same thing as the ``meta_template`` approach, ``meta_template`` just makes it a little more convenient to do it).

A Version That Worked Once
--------------------------

Here's the javascript for the broken version.

.. listing:: get_started.js javascript

This next bit shows how to include the sketch in the post. The naming of the ``div`` is important (``"get_started"`` in this case) - the javascript has to reference it (i.e. ``canvas.parent("get_started")``) or the sketch will not appear right here (see the notes below). I'm also using it to get the width for the image. As you can see from the ``src='get_started.js`` part, this loads a file called 'get_started.js' that I created earlier and put in the ``files/posts/testing-with-rst`` folder (the directory name matches the name of this blog-post file - ``testing-with-rst.rst``).

.. code:: html

   <div id="get_started">
       <script language="javascript" type="text/javascript" src='get_started.js'></script>
   </div>


.. raw:: html

   <div id="get_started">
      <script language="javascript" type="text/javascript" src='get_started.js'></script>
   </div>


This at first worked to create a processing sketch in that blank box above this line, but once I added another sketch it broke. Originally this sketch seemed to break the second one, but then I fixed the second sketch and it broke this one. I realized that I was defining the same function names (e.g. ``mousePressed``) in both so one of them was overwriting the other. Now it seems to work again, kind of... If you move your mouse cursor over fast enough that the circle is large while the sketch below is visible you'll see that the two of them have created some kind of super-canvas where they events over one also effects the other. So leaving this in has broken both of them to some degree. I think this function-based approach just won't work.

The Class-Based Version
-----------------------

My solution was to use the `instance mode <https://github.com/processing/p5.js/wiki/p5.js-overview#instantiation--namespace>`_ concept (which was surprisingly hard to find using google), basically wrapping everything in a class rather than using the global namespace.

.. raw:: html

   <div id="get_started_2">
      <script language="javascript" type="text/javascript" src='get_started_2.js'></script>
   </div>
   
If you can't tell, there's a processing sketch in that blank box above this line. If you move your mouse over it p5 will draw some circles with the radii based on how fast your mouse is moving. If you click and drag it inverts the colors.

Here's the javascript that created it.

.. listing:: get_started_2.js javascript

A Little Explanation
--------------------

So, for my future self who will likely forget what this is doing, here's some notes.

.. code:: js

   var p5_retest = new p5(build_get_started_2, "get_started_2");

The last line creates a ``p5`` object which calls the ``build_get_started_2`` function, passing the instance into it. In addition, if you pass in the ID of the container, it will attach the sketch to it. So the second argument ``"get_started_2"`` does what you would otherwise do in the constructor like this:

.. code:: js

   p.canvas.parent("get_started_2");

If you omit the name of the parent ID when creating the ``p5`` object then this line would need to go back into the constructor. I kind of like using the explicit ``p.canvas.parent("get_started_2");`` call, but I already did something similar to it in the previous (broken) sketch so I thought I'd pass it in to the ``p5`` constructor here so I'd have it documented.

The ``build_get_started_2`` function:

.. code:: js

   function build_get_started_2(p){
     return new GetStarted2(p, "get_started_2", 300);
   };

This works around a problem that I've often frequently with callback-functions - you have no control over how the function is going to be called, and without the code or explicit documentation you have to work with it as a black-box (I'm sure it's documented somewhere but I find the processing documentation for things other than the sketching to be a little hard to find). In this case I didn't really plan on it being a function, which probably wouldn't be a problem for someone who works with javascript a lot, but I'm not one of them. I'm not really taking advantage of any class-based features in my sketch so I could have converted it to a function, but I prefer classes (probably because I mostly code in python) so I'll probably be using them in the future, so it was good to get this figured out now. Also, since I had to make a builder anyway, this allowed me to put the constants (like the height) outside of the class and pass them in as parameters.

Other than that, the code is pretty close to the function-based version, except using th. ``p5`` instance instead of the global functions.
          
Notes
-----

* In order to get the javascript into the final HTML you need to put in the ``listings`` folder at the root of the nikola folder and use the `listing <https://www.getnikola.com/handbook.html#listing>`_ `reStructuredText` directive instead of ``include`` (this is a special *nikola* directive). This not only shows it but creates two links - the one with the file name links to a formatted version of the code and the `(Source)` link lets you download it as plain-text. Showing the code and creating another page seemed kind of redundant to me, but I think the purpose is to provide `a link you can refer to outside of this post <https://necromuralist.github.io/p5_explorations/listings/get_started.js.html>`_. You can't see the directive but it says:

.. code:: rst

   .. listing:: get_started.js javascript

* Another thing I forgot to mention in the other post was that *nikola* looks for the javascript (when it includes it in the html, not when it wants to show it as in the first note) in the ``files/posts/<post-name-slugified>/`` directory, so in this case, besides putting the javascript in the listings folder, I also had to put another copy of it in ``files/posts/testing-with-rst/``. There must be an easier way. Well, I guess it's not hard, it just seems inefficient.
