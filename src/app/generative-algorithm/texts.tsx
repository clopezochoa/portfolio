export enum Section {
  iterativePrototyping = "Iterative Prototyping",
  articleResearch = "Article Research",
  limits = "Limits",
  expectations = "Expectations",
  objects = "Objects",
  bundles = "Bundles",
  tenants = "Tenants",
  discover = "Discover",
  define = "Define",
  model = "Model",
}

export const initialBody = [
  <>
    <span className='work-body'>A tangible representation of software needs a definition of growth and shrinkage.<br/>
    This algorithm intakes databases and sorts each entry considering the nature of each new file,<br/>
    the formation state and their surroundings.<br/>
    <br/>
    In a nutshell: it digests raw data and calculates the optimal position for new pieces of code,<br/>
    so every file has its location in space and can be visually traced by the user.</span>
  </>,
  <>
    <span className='bold mt-20'>Duration</span>
    <span className='work-body'>20 Months</span>
  </>,
  <>
    <span className='bold'>Technologies</span>
    <span className='work-body'>.NET 6 + Visual Studio + WPF + C# + Python</span>
  </>,
  <>
    <span className='bold'>Role</span>
    <span className='work-body'>Algorithmic Designer</span>
  </>,
  <>
    <span className='bold'>Years</span>
    <span className='work-body'>2022 - 2023</span>
  </>
];

export const introBody = [
  <>
    <span className='work-subtitle'>Introduction</span>
    <span className='work-body'>&quot;Give physical entity to a variant database and make it look alive&quot;.<br/>
    <br/>
    When prototyping it, I realized that the problem was simple to describe yet difficult to solve,<br/>
    with this premise I began tinkering and managed to lay down the foundation sooner than expected.</span>
  </>,
  <>
    <span className='work-subtitle'>Problem</span>
    <span className='work-body'>Organic growth has two main challenges when it comes to mimicking life: expansion and behaviour.<br/>
    How can a group of items be located in space and decide where to go next?<br/>
    Who did it before me?<br/>
    What key advantages have the different already made solutions?<br/>
    Are there any technical pitfalls ahead?<br/>
    </span>
  </>
];

export const processBody = [
  <>
    <h2 className='work mb-10'>Process</h2>
  </>,
  <>
    <span>
    <span className="bold"><a href={'#' + Section.discover}>{Section.discover.toUpperCase()}</a></span>
      <div className='work-body'>
      <a href={'#' + Section.iterativePrototyping} className="ms-3">{Section.iterativePrototyping}<br/></a>
      <a href={'#' + Section.articleResearch} className="ms-3">{Section.articleResearch}<br/></a>
      </div>
      </span>
  </>,
  <>
    <span>
    <span className="bold"><a href={'#' + Section.define}>{Section.define.toUpperCase()}</a></span>
    <div className='work-body'>
      <a href={'#' + Section.limits} className="ms-3">{Section.limits}<br/></a>
      <a href={'#' + Section.expectations} className="ms-3">{Section.expectations}<br/></a>
    </div>
      </span>
  </>,
  <>
    <span>
    <span className="bold"><a href={'#' + Section.model}>{Section.model.toUpperCase()}</a></span>
      <div className='work-body'>
      <a href={'#' + Section.objects} className="ms-3">{Section.objects}<br/></a>
      <a href={'#' + Section.bundles} className="ms-3">{Section.bundles}<br/></a>
      <a href={'#' + Section.tenants} className="ms-3">{Section.tenants}<br/></a>
      </div>
      </span>
  </>,
];

export const discoverBody = [
  <>
    <span id={Section.iterativePrototyping} className='work-subtitle'>Iterative Prototyping</span>
    <span className='work-body'>
      A first approach to growing geometry is to define the surface of a unit and the direction of growth. <br/>  
      Shrinkage seems obvious at first: Deleting a unit is making its surface available.<br/>    
    </span>
    <span className='work-body'>
      After a thorough investigation, different situations and edge cases flourished. Holes can occurs as a result<br/>
      of deleting an inner item. Decisions must be taken when placing a new item. Slots can be classified as free,<br/>
      occupied or forbidden. An overall shape forms as a contour is perceived, this shape can resemble a circle when growth is sequential.<br/>    
    </span>
  </>,
  <>
    <span id={Section.articleResearch} className='work-subtitle'>Article Research</span>
    <span className='work-body'>
      When researching growth algorithms, two sources of knowledge were very important throughout the whole project:<br/>  
        <a className="underline" target="_blank" rel="noopener noreferrer" href="https://www.nationalgeographic.com/science/article/slime-mould-attacks-simulates-tokyo-rail-network">
        The first is an article by Ed Yong from 2010 on National Geographic about the Tokyo rail network.<br/>    
      </a>
      &quot;Tero grew Physarum in a wet dish at a place corresponding to Tokyo, with oat flakes marking the locations of other major cities<br/>
      in the Greater Tokyo Area. Physarum avoids bright light, so Tero used light to simulate mountains, lakes and other prohibitive<br/>
      terrain on his miniature map. The mould soon filled the space with a densely packed web of plasmodia.&quot;<br/>
      <br/>
      I have returned to this article for direction and enlightenment many times since the way the fungus behaves is inspiring and provides valuable ideas,<br/>  
      such as neighbour queries, distance degrees and convex polygons, all powerful tools for a shape to expand.<br/>
        <a className="underline" target="_blank" rel="noopener noreferrer" href="https://www.redblobgames.com/grids/hexagons/">
        The second is a blog by Amit Patel started in 1994 that beautifully explains hexagonal grids in depth.<br />
      </a>
      The honeycomb arrange came to mind unintentionally, probably because the pipeline I had to upgrade was based on a voronoi cell distribution<br/>
      and I suddenly became aware of the risks of having a variable tile surface, vertex and sides. Indeed bees are smart. Probably the most<br />
      valuable tool in this blog is the concept of Cube Coordinate. I did not notice its importance at first, surely because of being busy<br />
      with other subjects like rotations and rings.
    </span>
  </>
];

export const defineBody = [
  <>
    <span id={Section.expectations} className='work-subtitle'>Expectations</span>
    <span className='work-body'>
      First and foremost, it has to perform way faster and process way more data than the previous pipeline.<br/>  
      Robustness is also key to allow the algorithm to be reused over and over with any client, may it be very small or gigantic.<br/>  
      Robotic and artificial patterns must be avoided, the look and feel must be organic and should offer an image to be remembered.<br/>    
    </span>
  </>,
  <>
    <span id={Section.limits} className='work-subtitle'>Limits</span>
    <span className='work-body'>
      After testing a new possible pipeline using simple JSON files and not .obj or .glb files, it faced two critical tests.<br/>    
      Simulation time is the obvious one. Processing taking longer than ten minutes triggers alerts and may require optimization.<br/>    
      The second challenge is Babylon build time. Previously, bundled 3D objects resulted in fetching a file exceeding 100 MB.<br/>
      Reducing Babylon&#39;s input size to a few megabytes significantly improves download speed.<br/>
        Size-related challenges also impacted how Babylon handles geometry. With .obj files, developers simply wait for Babylon to render the model.<br/>
      However, using plain JSON requires more intricate instructions. Despite this additional complexity, the choice of JSON offers several benefits:<br/>
      Lightweight 3D scenes: Eliminating boilerplate code and verbose exports leads to smaller file sizes.<br/>
      Faster rendering: The new approach can significantly reduce rendering time, approaching real-time performance.<br/>
      Compatibility: JSON files offer broader compatibility compared to relying on specific versions of third-party software.<br/>
    </span>
  </>,
  <>
    <span className='work-subtitle'>Plan</span>
    <span className='work-body'>
      In conclusion, while the new JSON-based pipeline presents initial challenges in terms of handling geometry instructions,<br />
      it offers significant advantages in terms of file size, rendering speed, and compatibility. Monitoring simulation times<br />
      and further optimizing the pipeline can address any remaining performance concerns.<br/>
    </span>
  </>
];


export const modelBody = [
  <>
    <span id={Section.objects} className='work-subtitle'>Objects</span>
    <span className='work-body'>
      The unit chosen to build models is a very simple hexagon built by seven points in space, in the XZ plane, the ground.<br/>  
      That means we just have to set X and Z coordinates of the center of each unit relative to an origin, which is zero, zero, zero.<br/>  
      Knowing that, along with the radius of the hexagon, I could lay down elements to an elemental grid.<br/>    
    </span>
  </>,
  <>
    <span id={Section.bundles} className='work-subtitle'>Bundles</span>
    <span className='work-body'>
      How to get a first bundle and make it resemble organic from early on? Soon I realized that I needed a shape algorithm to rig the whole simulation.<br/>
      Answering that question was fun because initially I used no initial shape rig and let the simulation decide where to grow freely.<br/>    
      It led me to very questionable results. Basically a greater hexagon, a round circle or a rhomboid. No matter how I told the units to grow,<br/>    
      they just kept looking for all available space, since we needed it organic but not decentralized.<br/>
        Read my organic shape algorithm simulation post in this other page that better reveals my process to that regards.<br/>
        An organic shape genertor later...<br/>
      Items are correctly sorted and allocated in bundles, those bundles sort themselves as well and stack onto eachother.<br/>
      Everything is ready to be rendered geometrycally. Lastly, in order to communicate with the front-end from the scene, items must carry<br/>
      mapped info, like layer, date, size, id, etc.<br/>
      In addition to these mapped parameters, I gave states to the units, being it the most important parameter, alongside position,<br />
      to drive the simulation towards the expected output. This way I could perform queries on each bundle and across them to retrieve free slots,<br />
      perimetral positions or occupied spots. <br />
    </span>
  </>,
  <>
    <span id={Section.tenants} className='work-subtitle'>Tenants</span>
    <span className='work-body'>
      One last thing before starting to code, after prototyping, was to give a seed to each tenant. That way, everything was deterministic and even if<br />
      some decisions may be random, it all can be traced, reproduced and debugged. It also helped differentiating one customer from another, by being sure<br />
      about at least one parameter that each generation is unique to its tenant and cannot be mistaken.<br />
        After months of coding in C#, testing in VEX and being taught the wonders of Visual Studio, I reached a minimum viable product that made it to production.<br />
    </span>
  </>
];

