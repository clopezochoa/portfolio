export const initialBody = [
  <>
    <span>After prototyping the capstone project of a course by IBM about frontend engineering,<br/>
    a React app had to be made to grant functionality to a static design in plain HTML and CSS.<br/>
    Since my first visit to react.dev I realized that next.js was my best chance to deploy all<br/>
    the typescript I have learnt over the last years while working as both front end and backend<br/>
    developer.<br/>
    <br/>
    To elevate the experience of creating the app, I underwent a brief investigation on user personas around me.<br/>
    What caught my attention was the increasing medical services for a broad variety of users, some of which<br/>
    are not technologically savvy.<br/>
    <br />
    The final decision on what the app should do can be sythesized as:<br />
    &quot;Medical sevices with ease&quot;.</span>
  </>,
  <>
    <span className='bold'>Duration</span><br/>
    <span>2 Months</span><br/>
  </>,
  <>
    <span className='bold'>Tools</span><br/>
    <span>Typescript + Next.js + MongoDB</span><br/>
  </>,
  <>
    <span className='bold'>Role</span><br/>
    <span>Frontend Developer</span><br/>
  </>,
  <>
    <span className='bold'>Years</span><br/>
    <span>2024</span><br/>
  </>
];


export const introBody = [
  <>
    <span className='bold'>Introduction</span><br/>
    <span>&quot;Create a simple medical appointment service&quot;.<br/>
    <br/>
    While wireframing the navigation bar, the basic pillars of this app emerged as main drivers of the whole experience.<br/>
    In opposition to cluttered UI designs observed after a desk research, simplicity is used to reduce bounce rates.</span>
  </>,
  <>
    <span className='bold'>Problem</span><br/>
    <span>Elder people may find web-apps cluttered, messy and not worthy of the effort.<br/>
    How can fronttend development ease the pain of a cluttered UI?<br/>
    What good examples are there already?<br/>
    Can a simple design contribute to code maintainability?<br/>
    </span>
  </>
];

export const processBody = [
  <>
    <span className='bold'>Process</span><br/>
  </>,
  <>
    <span>
      DESIGN<br/>
      <span className="ms-3">Wireframing<br/></span>
      <span className="ms-3">Static Design<br/></span>
    </span>
  </>,
  <>
    <span>
      IMPLEMENT<br/>
      <span className="ms-3">Navigation<br/></span>
      <span className="ms-3">Services<br/></span>
    </span>
  </>,
  <>
    <span>
      CONNECT<br/>
      <span style={{height:'2px'}}></span>
      <span className="ms-3">Database<br/></span>
      <span className="ms-3">API<br/></span>
      <span className="ms-3">Cloud<br/></span>
    </span>
  </>,
];

export const designBody = [
  <>
    <span className='bold'>Wireframing</span><br/>
    <span>
      The approach that this design process followed had a top-to-bottom flow.<br/>
      A navigation bar is a great prototyping tool to encapsulate the pillars of an app:<br/>
      <br />
      HOME<br/>
      The landing page has a single responsibility, which is offering access to a variety of services, each depicted with an image and a caption.<br/>
      These services allow the user to get a new appointment, fetch reports and receive guidance.<br/>
      <br />
      APPOINTMENTS<br/>
      The goal of the whole app is getting to see your chosen doctor and the appointments space allows you to.<br/>
      Having booked an appointment through main services, the user may need to change or cancel it.<br/>
      <br />
      HEALTH BLOG<br/>
      A strong and readable communication channel that can be trusted is displayed in a Health Blog space.<br/>
      FAQ lists are based on probability, they judge the user by average values. Instead, a tips space with tailored advices avoid the probable and rely on user data.<br/>
      <br />
      REVIEW<br/>
      Users love reading reviews before spending money and/or time. Hence a dedicated space to reviews that offers a grasp of real-life experiences.<br/>
      <br />
      AUTHENTICATION<br/>
      Since these services offer tailored information for the user, signing in and up must be at hand.<br/>
      This implies that a user model and a session context must be created and managed throught cookies.<br/>
    </span><br/>
    <span>
      After a thorough investigation, different situations and edge cases flourished. Holes can occurs as a result<br/>
      of deleting an inner item. Decisions must be taken when placing a new item. Slots can be classified as free,<br/>
      occupied or forbidden. An overall shape forms as a contour is perceived, this shape can resemble a circle when growth is sequential.<br/>    
    </span><br/>
  </>,
  <>
    <span className='bold'>Static Design</span><br/>
    <span>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </span>
    {/* <span>
      When researching growth algorithms, two sources of knowledge were very important throughout the whole project:<br/>  
      <br />
      <a target="_blank" rel="noopener noreferrer" href="https://www.nationalgeographic.com/science/article/slime-mould-attacks-simulates-tokyo-rail-network">
        The first is an article by Ed Yong from 2010 on National Geographic about the Tokyo rail network.<br/>    
      </a>
      &quot;Tero grew Physarum in a wet dish at a place corresponding to Tokyo, with oat flakes marking the locations of other major cities<br/>
      in the Greater Tokyo Area. Physarum avoids bright light, so Tero used light to simulate mountains, lakes and other prohibitive<br/>
      terrain on his miniature map. The mould soon filled the space with a densely packed web of plasmodia.&quot;<br/>
      <br/>
      I have returned to this article for direction and enlightenment many times since the way the fungus behaves is inspiring and provides valuable ideas,<br/>  
      such as neighbour queries, distance degrees and convex polygons, all powerful tools for a shape to expand.<br/>
      <br />
      <a target="_blank" rel="noopener noreferrer" href="https://www.redblobgames.com/grids/hexagons/">
        The second is a blog by Amit Patel started in 1994 that beautifully explains hexagonal grids in depth.<br />
      </a>
      The honeycomb arrange came to mind unintentionally, probably because the pipeline I had to upgrade was based on a voronoi cell distribution<br/>
      and I suddenly became aware of the risks of having a variable tile surface, vertex and sides. Indeed bees are smart. Probably the most<br />
      valuable tool in this blog is the concept of Cube Coordinate. I did not notice its importance at first, surely because of being busy<br />
      with other subjects like rotations and rings.
    </span> */}
  </>
];

export const implementBody = [
  <>
    <span className='bold'>Navigation</span><br/>
    <span>
      First and foremost, it has to perform way faster and process way more data than the previous pipeline.<br/>  
      Robustness is also key to allow the algorithm to be reused over and over with any client, may it be very small or gigantic.<br/>  
      Robotic and artificial patterns must be avoided, the look and feel must be organic and should offer an image to be remembered.<br/>    
    </span>
  </>,
  <>
    <span className='bold'>Services</span><br/>
    <span>
      After testing a new possible pipeline using simple JSON files and not .obj or .glb files, it faced two critical tests.<br/>    
      Simulation time is the obvious one. Processing taking longer than ten minutes triggers alerts and may require optimization.<br/>    
      The second challenge is Babylon build time. Previously, bundled 3D objects resulted in fetching a file exceeding 100 MB.<br/>
      Reducing Babylon&#39;s input size to a few megabytes significantly improves download speed.<br/>
      <br />
      Size-related challenges also impacted how Babylon handles geometry. With .obj files, developers simply wait for Babylon to render the model.<br/>
      However, using plain JSON requires more intricate instructions. Despite this additional complexity, the choice of JSON offers several benefits:<br/>
      Lightweight 3D scenes: Eliminating boilerplate code and verbose exports leads to smaller file sizes.<br/>
      Faster rendering: The new approach can significantly reduce rendering time, approaching real-time performance.<br/>
      Compatibility: JSON files offer broader compatibility compared to relying on specific versions of third-party software.<br/>
    </span>
  </>
];


export const connectBody = [
  <>
    <span className='bold'>Database</span><br/>
    <span>
      The unit chosen to build models is a very simple hexagon built by seven points in space, in the XZ plane, the ground.<br/>  
      That means we just have to set X and Z coordinates of the center of each unit relative to an origin, which is zero, zero, zero.<br/>  
      Knowing that, along with the radius of the hexagon, I could lay down elements to an elemental grid.<br/>    
    </span>
  </>,
  <>
    <span className='bold'>API</span><br/>
    <span>
      How to get a first bundle and make it resemble organic from early on? Soon I realized that I needed a shape algorithm to rig the whole simulation.<br/>
      Answering that question was fun because initially I used no initial shape rig and let the simulation decide where to grow freely.<br/>    
      It led me to very questionable results. Basically a greater hexagon, a round circle or a rhomboid. No matter how I told the units to grow,<br/>    
      they just kept looking for all available space, since we needed it organic but not decentralized.<br/>
      <br />
      Read my organic shape algorithm simulation post in this other page that better reveals my process to that regards.<br/>
      <br />
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
    <span className='bold'>Cloud</span><br/>
    <span>
      One last thing before starting to code, after prototyping, was to give a seed to each tenant. That way, everything was deterministic and even if<br />
      some decisions may be random, it all can be traced, reproduced and debugged. It also helped differentiating one customer from another, by being sure<br />
      about at least one parameter that each generation is unique to its tenant and cannot be mistaken.<br />
      <br />
      After months of coding in C#, testing in VEX and being taught the wonders of Visual Studio, I reached a minimum viable product that made it to production.<br />
    </span>
  </>
];

