.. title: P5 Instance Mode Revisited
.. slug: p5-instance-mode-revisited
.. date: 2018-03-25 13:58:25 UTC-07:00
.. tags: processing p5 nikola
.. category: howto
.. link: 
.. description: Another Instance Mode Test
.. type: text

This is a re-do of another `re-do <https://necromuralist.github.io/p5_explorations/posts/testing-with-rst/>`__ I did where I tried to remember how to get P5 working again. This is a class-based version that doesn't set everything up in the constructor the way I did it previously. This adds more lines, but it seems better organized to me.

The Code
--------

.. listing:: class_based_instance_mode.js javascript

The Sketch
----------

For completeness, here is the html to include the sketch and the output of the sketch.

.. code:: html

   <div id="class-based-instance-mode">
       <script language="javascript" type="text/javascript" src='class_based_instance_mode.js'></script>
   </div>


.. raw:: html

   <div id="class-based-instance-mode">
      <script language="javascript" type="text/javascript" src='class_based_instance_mode.js'></script>
   </div>

The Closures
------------

Although I like the way the code looks when things are set up (more or less) outside of the constructor, it created the problem that the object doesn't have access to the right ``this`` when P5 calls the methods I created. To get around this I used the ``get`` methods to create closures that bind the right context to the implemented `p5` methods.

In addition, since the ``setup`` and ``mouse_released`` both set the same colors I created a ``reset`` function/property that stores the creation of the function when it's first created. I didn't bother to store ``mouse_pressed`` because the getter only gets used once (in the constructor), after that it gets assigned to the ``p5`` object anyway.

Putting the ``p`` attribute in a setter allowed me to set it up outside of the constructor, but makes it more fragile, as you have to make sure that it gets set after the other attributes or it will be an error.

A New Problem
-------------

I just noticed that the Mouse Presses trigger the inverting of colors for all the boxes on the page. Not a big deal in this case, I guess, although that might be something to work on later.
