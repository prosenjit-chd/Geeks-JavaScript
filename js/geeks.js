      //  *************Home Banner Section Start Here *************
      var homeCourseTitle = ["30,000 online courses", "Expert instruction", "Life time access"]
      var homeCourseIntro = ["Enjoy a variety of fresh topics", "Find the right instructor for you", "Learn on your schedule"]
      var homeIcon = ["fas fa-video", "fas fa-user-friends", "fas fa-clock"]

      function homeBanner(homeCourseTitle, homeCourseIntro, homeIcon){
        return(
          `
          <div class="col d-flex align-items-center">
                          <div class="home-icon">
                              <i class="${homeIcon}"></i>
                          </div>
                          <div class="home-details">
                              <h6>${homeCourseTitle}</h6>
                              <small>${homeCourseIntro}</small>
                          </div>
                      </div>
          
          `
        )
      }
      var homeBannerTemp = document.getElementById("home-ban")
      for(i=0; i<=2; i++){
        homeBannerTemp.innerHTML += homeBanner(homeCourseTitle[i], homeCourseIntro[i], homeIcon[i]);
      }

    //  **********Recommended to you Section Start Here********

      var recomendationTitleName = ["The Python Course: build web application", "GraphQL: introduction to graphQL for beginners", "Angular - the complete guide for beginner", "The Python Course: build web application"]
      var recomendationAuthorName = ["Claire Robertson", "Ted Hawkins", "Juanita Bell", "Claire Robertson"]
      var recomendationImgTitle = ["course-python.jpg", "course-graphql.jpg", "course-angular.jpg", "course-python.jpg"]
      var recomendationImgAuthor = ["avatar-4.jpg", "avatar-2.jpg", "avatar-3.jpg", "avatar-4.jpg"]
      var recomendationLevel = ["Intermediate", "Advance", "Beginner", " Intermediate"]
      var recomendationCourseTime = ["2h 30m", "2h 50m", "1h 25m", "2h 30m"]

      function recomendationCard(recomendationTitleName, recomendationAuthorName, recomendationImgTitle, recomendationImgAuthor, recomendationLevel, recomendationCourseTime){
        return(
          `
          <div class="col ">
                    <div class="card sec-card border-0">
                      <img class="card-img-ft" src="https://codescandy.com/geeks-bootstrap-5/assets/images/course/${recomendationImgTitle}" class="card-img-top" alt="...">
                      <div class="card-body">
                        <h5 class="card-title">${recomendationTitleName}</h5>
                        <div class="card-details">
                          <i class=" fas fa-clock"></i> <span class="card-md-icon-1">${recomendationCourseTime}</span><i class="card-md-icon-2 far fa-chart-bar"></i>${recomendationLevel}
                        </div>
                        <div class="card-details">
                          <i class="full-star fas fa-star"></i>
                          <i class="full-star fas fa-star"></i>
                          <i class="full-star fas fa-star"></i>
                          <i class="full-star fas fa-star"></i>
                          <i class="empty-star fas fa-star"></i>
                          <span>4.5 <span>(13,245)</span></span>
                      </div>
                      </div>
                      <div class="card-footer bg-white">
                          <div class="footer-details">
                              <div class="footer-athor">
                                  <img class="footer-image" src="https://codescandy.com/geeks-bootstrap-5/assets/images/avatar/${recomendationImgAuthor}" alt="">
                                  <small>${recomendationAuthorName}</small>
                              </div>
                              <div>
                                  <i class="far fa-bookmark"></i>
                              </div>
                          </div>
                      </div>
                    </div>
                  </div>
          
          `
        )
      }
      var recomendationtemp = document.getElementById("recommended-section")
      for(i=0; i<=3; i++){
        recomendationtemp.innerHTML += recomendationCard(recomendationTitleName[i], recomendationAuthorName[i], recomendationImgTitle[i], recomendationImgAuthor[i], recomendationLevel[i], recomendationCourseTime[i]);
      }

      //  **********Recommended to you Section End Here********


      //  **********Most Popular to you Section Start Here********

      var MostPopularTitleName = ["Wordpress: complete WordPress theme & plugin", "Getting Started with JavaScript Start Now", "CSS: ultimate CSS course from beginner to advanced", "Wordpress: complete WordPress theme & plugin"]
      var MostPopularAuthorName = ["Claire Robertson", "Ted Hawkins", "Juanita Bell", "Claire Robertson"]
      var MostPopularImgTitle = ["course-wordpress.jpg", "course-javascript.jpg", "course-css.jpg", "course-wordpress.jpg"]
      var MostPopularImgAuthor = ["avatar-8.jpg", "avatar-6.jpg", "avatar-7.jpg", "avatar-8.jpg"]
      var MostPopularLevel = ["Intermediate", "Advance", "Beginner", " Intermediate"]
      var MostPopularCourseTime = ["3h 30m", "1h 50m", "2h 25m", "3h 30m"]

      function MostPopularCard(MostPopularTitleName, MostPopularAuthorName, MostPopularImgTitle, MostPopularImgAuthor, MostPopularLevel, MostPopularCourseTime){
        return(
          `
          <div class="col ">
                    <div class="card sec-card border-0">
                      <img class="card-img-ft" src="https://codescandy.com/geeks-bootstrap-5/assets/images/course/${MostPopularImgTitle}" class="card-img-top" alt="...">
                      <div class="card-body">
                        <h5 class="card-title">${MostPopularTitleName}</h5>
                        <div class="card-details">
                          <i class=" fas fa-clock"></i> <span class="card-md-icon-1">${MostPopularCourseTime}</span><i class="card-md-icon-2 far fa-chart-bar"></i>${MostPopularLevel}
                        </div>
                        <div class="card-details">
                          <i class="full-star fas fa-star"></i>
                          <i class="full-star fas fa-star"></i>
                          <i class="full-star fas fa-star"></i>
                          <i class="full-star fas fa-star"></i>
                          <i class="empty-star fas fa-star"></i>
                          <span>4.5 <span>(13,245)</span></span>
                      </div>
                      </div>
                      <div class="card-footer bg-white">
                          <div class="footer-details">
                              <div class="footer-athor">
                                  <img class="footer-image" src="https://codescandy.com/geeks-bootstrap-5/assets/images/avatar/${MostPopularImgAuthor}" alt="">
                                  <small>${MostPopularAuthorName}</small>
                              </div>
                              <div>
                                  <i class="far fa-bookmark"></i>
                              </div>
                          </div>
                      </div>
                    </div>
                  </div>
          
          `
        )
      }
      var MostPopulartemp = document.getElementById("most-popular-section")
      for(i=0; i<=3; i++){
        MostPopulartemp.innerHTML += MostPopularCard(MostPopularTitleName[i], MostPopularAuthorName[i], MostPopularImgTitle[i], MostPopularImgAuthor[i], MostPopularLevel[i], MostPopularCourseTime[i]);
      }

      //  **********Most Popular to you Section End Here********

      //  **********Trending to you Section Start Here********

      var recomendationTitleName = ["The Python Course: build web application", "GraphQL: introduction to graphQL for beginners", "Angular - the complete guide for beginner", "The Python Course: build web application"]
      var recomendationAuthorName = ["Claire Robertson", "Ted Hawkins", "Juanita Bell", "Claire Robertson"]
      var recomendationImgTitle = ["course-python.jpg", "course-graphql.jpg", "course-angular.jpg", "course-python.jpg"]
      var recomendationImgAuthor = ["avatar-4.jpg", "avatar-2.jpg", "avatar-3.jpg", "avatar-4.jpg"]
      var recomendationLevel = ["Intermediate", "Advance", "Beginner", " Intermediate"]
      var recomendationCourseTime = ["2h 30m", "2h 50m", "1h 25m", "2h 30m"]

      function recomendationCard(recomendationTitleName, recomendationAuthorName, recomendationImgTitle, recomendationImgAuthor, recomendationLevel, recomendationCourseTime){
        return(
         `        <div class="col ">
                    <div class="card sec-card border-0">
                      <img class="card-img-ft" src="https://codescandy.com/geeks-bootstrap-5/assets/images/course/${recomendationImgTitle}" class="card-img-top" alt="...">
                      <div class="card-body">
                        <h5 class="card-title">${recomendationTitleName}</h5>
                        <div class="card-details">
                          <i class=" fas fa-clock"></i> <span class="card-md-icon-1">${recomendationCourseTime}</span><i class="card-md-icon-2 far fa-chart-bar"></i>${recomendationLevel}
                        </div>
                        <div class="card-details">
                          <i class="full-star fas fa-star"></i>
                          <i class="full-star fas fa-star"></i>
                          <i class="full-star fas fa-star"></i>
                          <i class="full-star fas fa-star"></i>
                          <i class="empty-star fas fa-star"></i>
                          <span>4.5 <span>(13,245)</span></span>
                      </div>
                      </div>
                      <div class="card-footer bg-white">
                          <div class="footer-details">
                              <div class="footer-athor">
                                  <img class="footer-image" src="https://codescandy.com/geeks-bootstrap-5/assets/images/avatar/${recomendationImgAuthor}" alt="">
                                  <small>${recomendationAuthorName}</small>
                              </div>
                              <div>
                                  <i class="far fa-bookmark"></i>
                              </div>
                          </div>
                      </div>
                    </div>
                  </div>
          `
        )
      }
      var recomendationtemp = document.getElementById("trending-section")
      for(i=0; i<=3; i++){
        recomendationtemp.innerHTML += recomendationCard(recomendationTitleName[i], recomendationAuthorName[i], recomendationImgTitle[i], recomendationImgAuthor[i], recomendationLevel[i], recomendationCourseTime[i]);
      }
      //  **********Most Popular to you Section End Here********