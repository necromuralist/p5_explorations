.. title: Re-Testing With meta-template Plugin
.. slug: re-testing-with-meta-template-plugin
.. date: 2017-05-18 17:39:18 UTC-07:00
.. tags: howto
.. category: P5
.. link: 
.. description: Trying a p5 post with meta-template
.. type: text

This is a re-do of the `previous post <https://necromuralist.github.io/p5_explorations/posts/testing-with-rst/>`_ on getting p5.js working here. In that case I added the reference to the CDN in the ``BODY_END`` variable in the ``conf.py`` file but I'm going to try to do it using the `meta-template plugin <https://plugins.getnikola.com/v7/meta_template/>`_

After installing the plugin in nikola::

  nikola plugin -i meta_template

I created a file at ``plugins/meta_template/templates/mako/p5.tmpl`` which contains only the link to the CDN.  
  
.. code:: html

   <script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.5.10/p5.min.js"></script>

Then in this file there is a directive that refers to the template-snippet I created.

.. code:: rst   

   .. template:: p5
              
Inspecting the rendered HTML shows that it inserted the template snippet exactly where the ``.. template:: p5`` directive was so as long it comes before the actual p5 code in the post it should work. For this particular repository I don't know that this is a better solution, since I'm planning to use p5 in pretty much every post, so I'm probably going to switch back to setting it it ``conf.py``, but I wanted to make sure that it worked, because I might use it elsewhere.
   
.. raw:: html

   <div id="get_started">
   <script language="javascript" type="text/javascript" src='get_started.js'></script>
   </div>

         
.. listing:: get_started.js javascript

