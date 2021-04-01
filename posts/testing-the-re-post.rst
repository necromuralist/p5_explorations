.. title: Testing The Re-Post
.. slug: testing-the-re-post
.. date: 2017-05-07 14:59:44 UTC-07:00
.. tags: processing p5 nikola
.. category: howto
.. link: 
.. description: A re-post to make sure things are working like I think they are.
.. type: text
.. template: p5.tmpl

This is a re-do of the :doc:`last post <testing-with-rst>` to make sure that a second post will work like I think it will.

The Re-Do
---------

.. raw:: html

   <div id="get_re_started">
      <script language="javascript" type="text/javascript" src='get_re_started.js'></script>
   </div>
   
If you can't tell, there's a processing sketch in that blank box above this line. If you move your mouse over it p5 will draw some circles with the radii based on how fast your mouse is moving. If you click and drag it inverts the colors.

What This Accomplished
----------------------

The first thing that happened when I added this post was that both the class based versions crashed and the function-based version started working. I don't think adding this was what caused it, it seems that p5 wasn't getting loafed before I created the p5 object.

.. code:: js

   var p5_restart = new p5(build_get_re_started, parent_div_id);

The question is really why it was working at all before. Anyway, I moved the ``script`` tag to download p5 from the CDN to the HTML HEAD and that seems to have fixed it (so far). The main thing is that this post can coexist with the previous post on the same page (and they don't interfere with each other), and the p5 library is only getting downloaded once (in the HEAD).
