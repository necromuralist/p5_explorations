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

.. note:: On the old post I had included the html tag directly in the post (using the ``.. raw::`` directive, but I thought that would be wasteful since you can have multiple posts on one page so I moved it the the ``BODY_END`` variable in the ``conf.py`` file which should add it to the end of the HTML body).


And now to include the sketch in the post. The naming of the ``div`` is important (``"get_started"`` in this case) - the javascript has to reference it (in the ``canvas.parent("get_started")`` line) or the sketch will not appear right here (see the notes below).

.. code:: html

   <div id="get_started">
       <script language="javascript" type="text/javascript" src='get_started.js'></script>
   </div>


.. raw:: html

   <div id="get_started">
   <script language="javascript" type="text/javascript" src='get_started.js'></script>
   </div>

         
.. listing:: get_started.js javascript


Notes
-----

* In order to get the javascript into the final HTML you need to put in the ``listings`` folder at the root of the nikola folder and use the `listing <https://www.getnikola.com/handbook.html#listing>`_ `reStructuredText` directive instead of ``include`` (this is a special *nikola* directive). You can't see it but it says:

.. code:: rst

   .. listing:: get_started.js javascript


* to get the sketch to stay in the post (instead of showing up on the bottom of the page), you have to use the div trick - create a `div` where you want the sketch to be and give it a unique ID (use the ``raw`` *reStructuredText* to put the HTML tags displayed above into the post), then set the parent in the sketch (``canvas.parent("get_started")`` in this example).

* Another thing I forgot to mention in the other post was that *nikola* looks for the javascript (when it includes it in the html, not when it wants to display it as in the first note) in the ``files/posts/<post-name-slugified>/`` directory, so in this case, besides putting the javascript in the listings folder, I also had to put another copy of it in ``files/posts/testing-with-rst/``. There must be an easier way. Well, I guess it's not hard, it just seems inefficient.
