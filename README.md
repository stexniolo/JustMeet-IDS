<p align="center">
   <img src="JustMeet-Frontend/components/images/JustMeet.png">
</p>

---


<p align="center">
<img src="https://forthebadge.com/images/badges/built-with-love.svg"/>
<img src="https://forthebadge.com/images/badges/built-for-android.svg"/>
<img src="https://forthebadge.com/images/badges/cc-0.svg"/><br><br>
    <b>JustMeet</b> is a project realized in <b>React Native</b> for the course of <b>Software Engineering</b> at <b>Unicam</b>, in the <i>academic year 2019/2020</i>, created by student Stefano Perniola following the proposed development canons
    <br><br><b>
</b></p>

# 📔 Table of Contents

- [Project Presentation](#panoramica)
- [Core Technologies](#tecno)
- [Tests](#test)
- [Workflow Iterations](#workflow)
- [Author](#autore)

# 📝 Project Presentation <a name = "panoramica"></a>

<table style="width:25%">
  <tr>
    <img align="left" src="JustMeet-Frontend/components/images/INTRO.jpeg" height="300" width="160">
    <img align="left" src="JustMeet-Frontend/components/images/INTRO2.jpeg" height="300" width="160">
    <img align="left" src="JustMeet-Frontend/components/images/INTRO3.jpeg" height="300" width="160">
    <img align="left" src="JustMeet-Frontend/components/images/INTRO4.jpeg" height="300" width="160">
  </tr>
</table>

The purpose is to create a software system that allows people to meet each other in order to carry out cooperative and team activities. Thus, the goal of the system is to encourage the creation of groups and new friendships and should work as a kind of advanced bulletin board of **public announcements** and coordination.

<img align="right" src="JustMeet-Frontend/components/images/SCOPRI EVENTI.jpeg" height="300">

Users can use the platform to publish events and to request the participation of other events. In particular, the type of event will require them to specify several characteristics.
For example, the system might allow organizing a soccer match by entering specific data such as: **location, time, title, description, topic,name of organizer and maximum number of participants** required for the event to take place. Once the required number of participants is reached, the event will no longer be available to other users.
Likewise, it will be possible to organize study seminars, public parties, sporting events of any kind, and more. 

Once logged in, the user will be able to create his or her own event and view the list of all published events, even filtering those events according to the user's geographic location and thus getting the ones **closest** to him or her. In addition, the user will also be able to **comment** on events, thus creating a social network in which various users can communicate with each other.
Thanks to the **topic** that characterizes a created Event, the user can be immediately informed about the activities of his interest that will take place and view them on the **map**. He will also be able to put his participation to inform the organizer of his presence.
In developing the application, it was necessary to focus on and define the list of events that the platform supports.


# 🧰 Core Technologies <a name = "tecno"></a>

<img align="left" src="JustMeet-Frontend/components/images/HOMEPAGE.jpeg" height="300">

The frontend side of the application is aimed at the Mobile world and was developed in the **Javascript** programming language using the **React Native** Open Source framework.

The navigation experience within the application is governed by a **Stack Navigator**, which is a configuration that allows navigation between the various components in a sequential manner, where each new screen is placed at the top of the stack.
We relied on interaction with services through extended JpaRepository interfaces regarding data persistence, which was processed and managed directly within the backend development framework.

A second implementation of the logic was based on a backend written in the **Java** language. The interaction between frontend and backend was made possible through the creation of **API Rest**, the writing and management of which, were made possible thanks to the **Spring Boot** framework. The **MySQL Workbench** relational database was relied upon for the persistence of the service data. In order to make it easier to write code through the use of annotations, it was decided to employ the **Spring Persistence** Java library.

<img align="right" src="JustMeet-Frontend/components/images/MAPPA EVENTI.jpeg" height="300">

Regarding the use of some essential services for users, it was decided to rely on the API services provided by **Google**, unrelated to what is the backend logic of the application.

Relying on a secure and reliable system regarding authentication, it was decided to employ the **Google OAuth 2.0** system.

In reference to the visualization of events in geographic maps, on the other hand, it was decided to use the **Google Maps** API, made accessible thanks to the react-native-maps module integrated in the frontend.

Finally, to ensure the legitimacy of event locations we relied on **Geolocator API**, a special service capable of converting any street address into geographic coordinates. 


# 🧪 Tests <a name = "test"></a>

Sono stati realizzati un complessivo di 31 test tramite la libreria **JUnit** al fine di verificare il corretto funzionamento delle principali chiamate Api Rest e per assicurarsi che le singole unità di sviluppo assolvano le sue funzioni secondo i requisiti previsti.


# 📁 Workflow Iterations <a name="workflow"></a>

The workflow was divided into 4 iterations lasting 2 weeks each. For ease of organization, it was decided that the expiration of each iteration would coincide with the Sunday of the second week and the start of a new iteration would coincide with the following Monday. The following table lists the start and expiration dates of each iteration:

<table style="width:100%">
  <tr>
    <th># Iteration</th>
    <th>Starting date</th> 
    <th>Expiration date</th>
  </tr>
  <tr>
    <td>1</td>
    <td>08/03/2020</td>
    <td>22/03/2020</td>
  </tr>
  <tr>
    <td>2</td>
    <td>23/03/2020</td>
    <td>05/04/2020</td>
  </tr>
  <tr>
    <td>3</td>
    <td>6/04/2020</td>
    <td>19/04/2020</td>
  </tr>
   <tr>
    <td>4</td>
    <td>20/04/2020</td>
    <td>03/05/2020</td>
  </tr>
</table>

A brief summary of the classes implemented in the various iterations:

Iteration **I**) Implemented the **Event** class with related Controllers and Repositories. Implemented JUnit tests on EventControlle API calls;

Iteration **II**) Implemented the **User** class with related Controllers and Repositories. Implemented JUnit tests on the API calls of UserController;

Iteration **III**) Implemented the **Location** and **Topic** classes with related Controllers and Repositories. Implemented JUnit tests on the API calls of LocationController and TopicController;

Iteration **IV**) Implemented the **Comment** and **Scheduler** classes with related Controllers and Repositories. Implemented JUnit tests on the API calls of CommentController and SchedulerController and performed Integration Tests of the components.

While conducting a more advanced iteration, however, changes were made to components of previous iterations to respect the evolutionary nature of the unified process.

# 🔭 Author <a name = "autore"></a>

- [Stefano Perniola](https://github.com/xniola)
