/*
This is empty on purpose! Your code to build the resume will go here.
 */
var model = {
  // 人物传记
  bio: {
    name: '梁文冲',
    role: '前端开发',
    contacts: {
      mobile: '13760471392',
      email: '13760471392@139.com',
      github: 'https://github.com/LwcReber',
      location: '深圳宝安'
    },
    welcomeMessage: 'just do it',
    skills: ['HTML', 'CSS', 'JavaScript', 'C', 'gulp工具，了解ES6语法和Vue', '熟悉框架：Jquery、swiper.js、Angular JS、Boostrap、knockout JS、Backbone JS'],
    biopic: ''// 暂时不要头像
  },

  // 教育背景
  edu: {
    schools: [{
      name: '深圳职业技术学院',
      location: '深圳市南山区西丽湖沙河西路',
      degree: '大专',
      majors: ['汽车电子技术'],
      dates: '2013.9-2016.7',
      url: 'http://www.szpt.edu.cn/in_index.shtml'
    }],
    prizes: [
      '深圳职业技术学院优秀毕业生',
      '汽车与交通学院2016届“创新创业之星”',
      '全国大学生“飞思卡尔”杯智能车竞赛三等奖',
      '广东省第十三届“挑战杯”三等奖',
      '广东省第十五届物理实验设计大赛三等奖',
      '第十一届专业技能大比武一等奖',
      '国家励志奖学金2次、二等奖学金2次、三等奖学金2次、三好学生1次'
    ],
    onlineCourses: [{
      title: '前端开发进阶',
      school: '优达学城（Udacity）',
      dates: '2017.5-2017.7',
      url: 'https://cn.udacity.com/'
    }]
  },

  // 工作经验
  work: {
    jobs: [{
      employer: 'Mr XX',
      company: '深圳瑞泰讯通信息技术有限公司',
      title: 'MCU软件工程师',
      location: '深圳市宝安区西乡',
      dates: '2016.2-2017.2',
      description: '使用C语言，对 MCU（富士通、STM32F103）进行软件编写，项目开发前期的功能评定、负责车载导航底层 MCU各模块的开发与维护，与 APP 进行联调实现客户需求。'
    }]
  },

  // 项目经验
  projects: {
    projects: [{
      title: 'cnode社区移动端-vue版',
      dates: '',
      url: 'https://lwcreber.github.io/cnode_vue/',
      description: '技术栈：vue 2.0 + vue-router + webpack + ES6 + sass，使用 vue-cli构建项目，页面分为header，content，footer三部分，因为底部一直固定，所以考虑把footer部分写成一个组件，点击底部导航通过vue-router进行切换。对cnode社区进行数据请求时，vue也很友好，直接引入VueResource ，然后直接使用$http就可以进行请求（angular也有自身的http请求）。滑动翻页时应该要出现的一个加载器以达到一个加载中的效果，通过引入vue-spinner使用其中一个加载器实现的。滑动到一定的距离时，应该要出现返回顶部的按钮，这个是一个功能，就把它写成一个组件，直接在主页vue文件中通过标签引用。点击导航按钮添加一些动画效果，复制需要的Animate.css的css样式，通过vue的transition修改动画命名就成功实现了',
      images: 'images/197x148.gif'
    },
    {
      title: 'cnode社区移动端-angular版',
      dates: '',
      url: 'https://lwcreber.github.io/cnode_gulp/#/home',
      description: '项目使用的框架是Angular JS 、Boostrap，使用gulp工具，对项目进行构建，采用DIV+CSS布局。根据cnode社区提供的API，利用Angular JS的$http服务，使用get或者post方法，进行http请求。主页内容部分，使用Angular JS的infinite-scroll，滑动触发调用$http函数从而实现滑动加载。成功返回数据时解析出主题部分，在html中通过ng-repeat指令，创建每个新加载的主题。使用directive创建返回功能的指令。',
      images: 'images/197x148.gif'
    },
    {
      title: '青蛙过河游戏',
      dates: '',
      url: 'https://lwcreber.github.io/Udacity_Frogger',
      description: '使用HTML5的Canvas绘制所有的游戏元素，使用JavaScript的面向对象对玩家类和虫子类进行编写，使用requestAnimationFrame来调用游戏的循环函数，使应用的运行速度尽可能达到 60帧每秒。',
      images: 'images/197x148.gif'
    },
    {
      title: '网站性能优化项目',
      dates: '',
      url: 'https://lwcreber.github.io/Website_Optimization',
      description: '使用gulp工具压缩html、css、js、image文件，对 index.html 和 main.js进行了优化，使用pageSpeed Insights 测试index.html达到90分，使用Chrome 开发者工具的performance查看pizza.html的性能问题，优化后pizza.html滚动时保持60fps 的帧速，调整pizza尺寸的时间小于5ms，网页没有出现强制同步布局问题。项目主要针对加载、动画、响应过程进行了优化',
      images: 'images/197x148.gif'
    },
    {
      title: '街区地图',
      dates: '',
      url: 'https://github.com/LwcReber/Map_APP',
      description: '街区地图是一个响应式应用，使用 gulp 工具构建该项目，使用 eslint 对js进行检测，修改成符合eslint格式的代码。使用框架：knockout JS, 使用google map API 完成地图显示和地图控件功能、使用jquery 的ajax对高德地图API进行请求获取地点的详细信息。',
      images: 'images/197x148.gif'
    },
    {
      title: '健康记录应用',
      dates: '',
      url: ' https://lwcreber.github.io/health_Tracker/ ',
      description: '使用 gulp 工具构建，使用框架 backbone JS，使用jquery 的ajax对Nutritionix API 请求查询对应的食物卡路里。查询过程将出现加载显示器，查询成功将返回该类食物的不同卡路里数，选择食物后，将把食物添加到卡路里计算列表中，同时使用localStorage保存食物数据。',
      images: 'images/197x148.gif'
    }
    ]
  },
  source: {
    url: 'https://github.com/LwcReber/Resume'
  },
  // 替换元素的内容
  setPlaceholder: function(old, replacedata) {
    return old.replace("%data%", replacedata);
  }
};

var octopus = {
  init: function() {
    view.init();
  },

  // 获取人物传记
  getBio: function() {
    return model.bio;
  },

  // 获取工作经历
  getWork: function() {
    return model.work;
  },

  // 获取项目经验
  getProjects: function() {
    return model.projects;
  },

  // 获取教育背景
  getEducation: function() {
    return model.edu;
  },
  // 获取源码url数据
  getSource: function() {
    return model.source;
  } ,
  // 获取元素的显示内容
  getPlaceholder: function(old, replacedata) {
    return model.setPlaceholder(old, replacedata);
  }
};

var view = {
  init: function() {
    this.bio = octopus.getBio();
    this.work = octopus.getWork();
    this.projects = octopus.getProjects();
    this.edu = octopus.getEducation();
    this.source = octopus.getSource();

    this.header = $("#header");
    this.workExperienceElem = $("#workExperience");
    this.projectElem = $("#projects");
    this.educationElem = $("#education");
    this.topContacts = $("#topContacts");
    this.footerContacts = $("#footerContacts");

    this.render();
  },

  // 添加到elem里的最后面
  appendElem: function(elem, data) {
    elem.append(data);
  },

  // 添加到elem里的最前面
  prependElem: function(elem, data) {
    elem.prepend(data);
  },
  render: function() {
    /**
     * bio 区域
     */
    // 装载header部分
    // 添加职位姓名到header
    var headerData = [
      // [HTMLbioPic, this.bio.biopic], // 头像
      [HTMLheaderRole, this.bio.role],
      [HTMLheaderName, this.bio.name],
    ];
    for (var i = 0; i < headerData.length; i++) {
      var newdata = octopus.getPlaceholder(headerData[i][0],headerData[i][1]);
      this.prependElem(this.header, newdata)
    }

    // 添加技能元素到head中
    this.appendElem(this.header, HTMLskillsStart);

    // 获取skillsStart ul元素
    var skillsElem = $("#skills");
    // 创建skills表
    for (var i = 0; i < this.bio.skills.length; i++) {
      var skills = octopus.getPlaceholder(HTMLskills, this.bio.skills[i]);
      this.appendElem(skillsElem, skills);
    }

    // 联系方式列表
    var contactsData = [
      [HTMLmobile, this.bio.contacts.mobile], // 电话
      [HTMLemail, this.bio.contacts.email], // email
      // [HTMLtwitter, this.bio.contacts.twitter], // twitter
      [HTMLgithub, this.bio.contacts.github], // github
      // [HTMLblog, this.bio.contacts.blog], // blog
      [HTMLlocation, this.bio.contacts.location] // location
    ]
    for (var i = 0; i < contactsData.length; i++) {
      var newContact = octopus.getPlaceholder(contactsData[i][0], contactsData[i][1]);
      this.appendElem(this.topContacts, newContact);
      // 底部联系
      this.appendElem(this.footerContacts, newContact);
    }

    /**
     * work 区域
     */
    // workStart
    this.appendElem(this.workExperienceElem, HTMLworkStart);

    // 获取workStatr元素
    var workEtyElem = $(".work-entry");

    for (var i = 0; i < this.work.jobs.length; i++) {
      // 工作雇主
      // var workEmployer = octopus.getPlaceholder(HTMLworkEmployer, this.work.jobs[i].employer);
      // var workTitle = octopus.getPlaceholder(HTMLworkTitle, this.work.jobs[i].title);
      // 公司
      var company = octopus.getPlaceholder(HTMLcompany, this.work.jobs[i].company);
      // 职业
      var occupation = octopus.getPlaceholder(HTMLworkOccupation, this.work.jobs[i].title);
      // 工作时间
      var workDates = octopus.getPlaceholder(HTMLworkDates, this.work.jobs[i].dates);

      // 工作地点
      var workLocation = octopus.getPlaceholder(HTMLworkLocation, this.work.jobs[i].location);

      // 工作描述
      var workDescription = octopus.getPlaceholder(HTMLworkDescription, this.work.jobs[i].description);

      // 添加元素到work-entry元素
      this.appendElem(workEtyElem, company + occupation + workDates + workLocation + workDescription);
    }

    /**
     * project
     */
    this.appendElem(this.projectElem, HTMLprojectStart);

    // 获取projectStart元素
    var projectEtyElem = $(".project-entry");

    for (var i = 0; i < this.projects.projects.length; i++) {
      // project的标题
      var projectTitle = octopus.getPlaceholder(HTMLprojectTitle, this.projects.projects[i].title);

      // project的链接
      var projectUrl = octopus.getPlaceholder(HTMLprojectUrl, this.projects.projects[i].url);
      // project的日期
      // var projectDate = octopus.getPlaceholder(HTMLprojectDates, this.projects.projects[i].dates);

      // project的描述
      var projectDescription = octopus.getPlaceholder(HTMLprojectDescription, this.projects.projects[i].description);

      // project的图片
      // var projectImage = octopus.getPlaceholder(HTMLprojectImage, this.projects.projects[i].images);

      // 添加项目经验
      this.appendElem(projectEtyElem, projectUrl + projectTitle + projectDescription);
    }

    /**
     * 教育背景
     */
    this.appendElem(this.educationElem, HTMLschoolStart);

    // 获取education-entry元素
    var schoolEtyElem = $(".education-entry")[0];
    for (var i = 0; i < this.edu.schools.length; i++) {
      var schoolName = octopus.getPlaceholder(HTMLschoolName, this.edu.schools[i].name);

      var schooDegree = octopus.getPlaceholder(HTMLschoolDegree, this.edu.schools[i].degree);

      var schoolDates = octopus.getPlaceholder(HTMLschoolDates, this.edu.schools[i].dates);

      var schoolLocation = octopus.getPlaceholder(HTMLschoolLocation, this.edu.schools[i].location);

      var schoolMajor = '';
      for (var j = 0; j < this.edu.schools[i].majors.length; j++) {
        schoolMajor += this.edu.schools[i].majors[j] + ' ';
      }
      var schoolMajors = octopus.getPlaceholder(HTMLschoolMajor, schoolMajor);
      // 添加学校
      this.appendElem($(schoolEtyElem), schoolName + schooDegree + schoolDates + schoolLocation + schoolMajors);
    }

    // 获奖情况
    this.appendElem(this.educationElem, HTMLprizeTitle + HTMLprizes)

    for (var i = 0; i < this.edu.prizes.length; i++) {
      var data = octopus.getPlaceholder(HTMLprize, this.edu.prizes[i]);
      this.appendElem($('.prizes'), data);
    }

    // 在线教育
    this.appendElem(this.educationElem, HTMLonlineClasses);
    // 创建onlineCourses入口
    this.appendElem(this.educationElem, HTMLschoolStart);

    var onlineClassEtyElem = $(".education-entry")[1];

    for (i = 0; i < this.edu.onlineCourses.length; i++) {
      var onlineTitle = octopus.getPlaceholder(HTMLonlineTitle, this.edu.onlineCourses[i].title);

      var onlineSchool = octopus.getPlaceholder(HTMLonlineSchool, this.edu.onlineCourses[i].school);

      var onlineDates = octopus.getPlaceholder(HTMLonlineDates, this.edu.onlineCourses[i].dates);

      var onlineUrl = octopus.getPlaceholder(HTMLonlineURL, this.edu.onlineCourses[i].url);

      this.appendElem($(onlineClassEtyElem), onlineTitle + onlineSchool + onlineDates + onlineUrl);
    }

    // 添加源码地址
    var sourceUrl = octopus.getPlaceholder(HTMLsourceUrl, this.source.url);
    this.appendElem(this.footerContacts, sourceUrl);
  }
}
octopus.init();
