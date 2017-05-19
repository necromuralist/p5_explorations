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

   <script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.5.8/p5.min.js"></script>

.. note:: On the old post I had included the html tag directly in the post (using the ``.. raw::`` directive), but I thought that would be wasteful since you can have multiple posts on one page so I moved it the the ``BODY_END`` variable in the ``conf.py`` file which adds it to the end of the HTML body.


And now to include the sketch in the post. The naming of the ``div`` is important (``"get_started"`` in this case) - the javascript has to reference it (in the ``canvas.parent("get_started")`` line) or the sketch will not appear right here (see the notes below). I'm also using it to get the width for the image - kind of fragile I guess, but what can you do?

.. code:: html

   <div id="get_started">
       <script language="javascript" type="text/javascript" src='get_started.js'></script>
   </div>


.. raw:: html

   <div id="get_started">
      <script language="javascript" type="text/javascript" src='get_started.js'></script>
   </div>

If you can't tell, there's a processing sketch in that blank box above this line. If you move your mouse over it p5 will draw some circles with the radii based on how fast your mouse is moving. If you click and drag it inverts the colors.

Here's the javascript that created it.

         
.. listing:: get_started.js javascript


Notes
-----

* In order to get the javascript into the final HTML you need to put in the ``listings`` folder at the root of the nikola folder and use the `listing <https://www.getnikola.com/handbook.html#listing>`_ `reStructuredText` directive instead of ``include`` (this is a special *nikola* directive). This not only shows it but creates two links - the one with the file name links to a formatted version of the code and the `(Source)` link lets you download it as plain-text. Showing the code and creating another page seemed kind of redundant to me, but I think the purpose is to provide `a link you can refer to outside of this post <https://necromuralist.github.io/p5_explorations/listings/get_started.js.html>`_. You can't see it but it says:

.. code:: rst

   .. listing:: get_started.js javascript


* to get the sketch to stay in the post (instead of showing up on the bottom of the page), you have to use the div trick - create a `div` where you want the sketch to be and give it a unique ID (use the ``raw`` *reStructuredText* to put the HTML tags displayed above into the post), then set the parent in the sketch (``canvas.parent("get_started")`` in this example).

* Another thing I forgot to mention in the other post was that *nikola* looks for the javascript (when it includes it in the html, not when it wants to display it as in the first note) in the ``files/posts/<post-name-slugified>/`` directory, so in this case, besides putting the javascript in the listings folder, I also had to put another copy of it in ``files/posts/testing-with-rst/``. There must be an easier way. Well, I guess it's not hard, it just seems inefficient.
