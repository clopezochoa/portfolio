import '@/styles/text.css'

enum Section {
  design = "Design",
  implement = "Implement",
  connect = "Connect",
  wireframing = "Wireframing",
  staticDesign = "Static Design",
  navigation = "Navigation",
  services = "Services",
  database = "Database",
  api = "API",
  cloud = "Cloud",
}

export const initialBody = [
  <>
    <span className='work-body'>After prototyping the capstone project of a course by IBM about <span className="bold">frontend engineering,</span><br/>
    a React app had to be made to grant <span className="bold">functionality</span> to a static design in plain HTML and CSS.<br/>
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
    <span className='bold mt-20'>Duration</span><br/>
    <span className='work-body'>2 Months</span><br/>
  </>,
  <>
    <span className='bold'>Tools</span><br/>
    <span className='work-body'>Typescript + Next.js + MongoDB</span><br/>
  </>,
  <>
    <span className='bold'>Role</span><br/>
    <span className='work-body'>Frontend Developer</span><br/>
  </>,
  <>
    <span className='bold'>Years</span><br/>
    <span className='work-body'>2024</span><br/>
  </>
];


export const introBody = [
  <>
    <span className='work-subtitle'>Introduction</span><br/>
    <br />
    <span className='work-body'>&quot;Create a simple medical appointment service&quot;.<br/>
    <br/>
    While wireframing the navigation bar, the basic pillars of this app emerged as main drivers of the whole experience.<br/>
    In opposition to <span className="bold">cluttered UI designs</span> observed after a desk research, simplicity is used to reduce bounce rates.</span>
  </>,
  <>
    <span className='work-subtitle'>Problem</span><br/>
    <br />
    <span className='work-body'>Elder people may find web-apps cluttered, messy and not worthy of the effort.<br/>
    How can frontend development ease the pain of a cluttered UI?<br/>
    What good examples are there already?<br/>
    Can a simple design contribute to code maintainability?<br/>
    </span>
  </>
];

export const processBody = [
  <>
    <h2 className='work mb-10'>Process</h2><br/>
  </>,
  <>
    <span>
    <span className="bold"><a href={'#' + Section.design}>{Section.design.toUpperCase()}</a></span><br/>
      <div className='work-body'>
      <a href={'#' + Section.wireframing} className="ms-3">{Section.wireframing}<br/></a>
      <a href={'#' + Section.staticDesign} className="ms-3">{Section.staticDesign}<br/></a>
      </div>
      <br />
    </span>
  </>,
  <>
    <span>
    <span className="bold"><a href={'#' + Section.implement}>{Section.implement.toUpperCase()}</a></span><br/>
    <div className='work-body'>
      <a href={'#' + Section.navigation} className="ms-3">{Section.navigation}<br/></a>
      <a href={'#' + Section.services} className="ms-3">{Section.services}<br/></a>
    </div>
      <br />
    </span>
  </>,
  <>
    <span>
    <span className="bold"><a href={'#' + Section.connect}>{Section.connect.toUpperCase()}</a></span><br/>
      <div className='work-body'>
      <a href={'#' + Section.database} className="ms-3">{Section.database}<br/></a>
      <a href={'#' + Section.api} className="ms-3">{Section.api}<br/></a>
      <a href={'#' + Section.cloud} className="ms-3">{Section.cloud}<br/></a>
      </div>
      <br />
    </span>
  </>,
];

export const designBody = [
  <>
    <span id={Section.wireframing} className='work-subtitle'>Wireframing</span><br/>
    <br />
    <span className='work-body'>
      The approach that this design process followed had a top-to-bottom flow.<br/>
      A navigation bar is a great <span className="bold">prototyping tool</span> to encapsulate the pillars of an app:<br/>
      <br />
      <span className="bold">HOME</span><br/>
      The landing page has a <span className="bold">single responsibility,</span> which is offering access to a variety of services, each depicted with an image and a caption.<br/>
      These services allow the user to get a new appointment, fetch reports and receive guidance.<br/>
      <br />
      <span className="bold">APPOINTMENTS</span><br/>
      The goal of the whole app is getting to see your chosen doctor and the appointments space allows you to.<br/>
      Having booked an appointment through main services, the user may need to <span className="bold">change or cancel</span> it.<br/>
      <br />
      <span className="bold">HEALTH BLOG</span><br/>
      A strong and <span className="bold">readable communication channel</span> that can be trusted is displayed in a Health Blog space.<br/>
      FAQ lists are based on probability, they judge the user by average values. Instead, a tips space with tailored advices avoid the probable and rely on user data.<br/>
      <br />
      <span className="bold">REVIEW</span><br/>
      Users love reading reviews before spending money and/or time. Hence a <span className="bold">dedicated space</span> to reviews that offers a grasp of real-life experiences.<br/>
      <br />
      <span className="bold">AUTHENTICATION</span><br/>
      Since these services offer <span className="bold">tailored information</span> for the user, signing in and up must be at hand.<br/>
      This implies that a user model and a session context must be created and managed throught cookies.<br/>
    </span><br/>
    <span className='work-body'>
      Up to this point, a wishlist can be pulled out of the navbar:<br/>
      We need a database to <span className="bold">retain the information.</span><br/>
      API Endpoints to <span className="bold">get and post</span> info to it.<br/>    
      A cloud bucket to <span className="bold">store bigger files</span> such as reports.<br/>    
    </span><br/>
  </>,
  <>
    <span id={Section.staticDesign} className='work-subtitle'>Static Design</span><br/>
    <br />
    <span className='work-body'>
      What comes after initial drafts is to produce a responsive static desing for both <span className="bold">desktop and mobile.</span> Even though users of advanced age are getting more and more<br />
      into the mobile scene using smartphones, they often rely on computers simply because they were here before smartphones. <br />
    </span> <br />
    <span className='work-body'>
      Figma was a great aid when it came to:<br/>  
      <br />
      - Streamline the components production. Since React is <span className="bold">component based,</span> Figma&apos;s components are a blessing to keep everything tidy.<br/>
      - Get the most out of styles and variables to be aligned with <span className="bold">Tailwind.</span><br/>
      - Extract <span className="bold">production ready CSS</span> out of elements using the Dev Mode.<br/>  
      <br />
    </span>
  </>
];

export const implementBody = [
  <>
    <br />
    <span id={Section.navigation} className='work-subtitle'>Navigation</span><br/>
    <span className='work-body'>
      To ease the burden of a <span className="bold">slow device or connection,</span> navigation has been narrowed down to the symbols appearing in the navbar, plus the two booking services.<br />
      It requires <span className="bold">just one click</span> to access any of the booking services available in the app. This makes the app easier and faster, since there is no excessive routing<br />
      and all services are <span className="bold">readily available.</span><br />
      With the app router built in NextJS, this is easy to implement, a hook assists the developer to push new routes to navigate effortlessly.<br/>
      <br />
      Some features do not navigate at all, reducing even more HTTP requests and appearing as tools, rather than services. Precisely, this has been done <br />
      with authentication, profile management, notifications and action modals within appointment and reviewing services. The app displays the information quicker, <br />
      since the information that feeds the modals is <span className="bold">lazy-loaded</span> before the user has the chance to even open a card.<br/>
      <br />
      In addition to this strategy, <span className="bold">SSR (server-side-rendering)</span> is done by default by NextJS in all components not marked with the client directive. <br />
      The combination results in a near <span className="bold">real-time experience.</span> Only the first load of doctor&apos;s images takes a perceivable amount of time (somewhere around 94 to 100 ms).<br/>    
    </span>
  </>,
  <>
    <br />
    <span id={Section.services} className='work-subtitle'>Services</span><br/>
    <span className='work-body'>
      In order to book or acquire anything, a user must be offered with their possibilities. With this premise I developed a <span className="bold">search tool</span> that queries <span className="bold">partial strings</span> <br />
      to match doctor names or specialities. There are two ways to book an appointment. The &quot;instant&quot; appointment services offers a grid of all the doctors <br />
      there are if no queries have been made, and an array of the matched doctors if the search tool has any string on it. It is considered &quot;instant&quot; because <br />
      of having cards with the doctor&apos;s profile picture to <span className="bold">help patients remember their doctors,</span> in oposition to the other service, that allows the user to get a list <br />
      all doctors in a certain specialty with a dropdown menu. These two services preload data tailored to the logged user so the booking services keep a <span className="bold">consistent</span> <br />
      <span className="bold">and fast experience.</span><br/>    
      <br />
      Another key service is the Healthy Tips space, that aims to inform the user about healthier habits with two strategies. The first one is to be specific about <br />
      the <span className="bold">user needs,</span> so the tips are sorted by affinity with the user. The second is to be generous offering a great amount of capsules that the user may read or not, <br />
      but are offered nevertheless.<br/>
      <br/>
      The reports service is designed to be very concise and simple, &quot;gather all your diagnoses in one container&quot;. I often see people in medical centers <br />
      (including myself), carrying a folder with all my reports to be sure that I&apos;m carrying all the information my doctor needs about me. This is not necesarry anymore <br />
      thanks to a service that both doctors and patients can access to <span className="bold">retrieve and inspect or download reports</span> in an ordered list.<br/>
    </span>
  </>
];


export const connectBody = [
  <>
    <br />
    <span id={Section.database} className='work-subtitle'>Database</span><br/>
    <span className='work-body'>
      The chosen database framework for this project has been <span className="bold">MongoDB</span> for many reasons, being its flexible structure the most important, allowing events and logs <br />
      to be partial and refactors to be made gracefully. The health insurance industry is ever evolving and both doctors and patients may register additional information <br />
      in the future to enhance their experience using the app. Furthermore, some users may not have at hand all their information when signing in and <span className="bold">partial structures</span> <br />
      are convenient in this case to avoid punishing them.<br/>  
    </span>
  </>,
  <>
    <br />
    <span id={Section.api} className='work-subtitle'>API</span><br/>
    <span className='work-body'>
      <span className="bold">CRUD operations</span> are made with <span className="bold">RESTful API endpoints</span> in the server side thanks to the app router yet again. NextJS is in charge of managing the whole operation <br />
      from the client, creating a request that is encrypted and sent to the server for it to use the <span className="bold">Atlas Device SDK for the Web. </span>It then provides with a response that <br />
      is sent from the server to the client and stored conveniently in the user cookies instead of the local storage to increase security.<br/>
    </span>
  </>,
  <>
    <br />
    <span id={Section.cloud} className='work-subtitle'>Cloud</span><br/>
    <span className='work-body'>
      Every graphic resource is loaded from a bucket in the <span className="bold">Google Cloud Platform. </span>Larger text files like Healthy Tips and Reports are also stored in the cloud <br />
      to simulate a CDN and ease the experience of a poorly performant device.<br />
    </span>
  </>
];

