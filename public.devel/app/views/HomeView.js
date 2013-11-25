/**
 * View Description
 * 
 * @langversion JavaScript
 * 
 * @author 
 * @since  
 */


 var View     = require('core/View');
 var GraphCollection = require('collections/GraphCollection'); 

 var HomeTemplate = require('templates/homeViewTemplate');
 var RelatedsTemplate = require('templates/relatedsTemplate');
 var BreadcrumbTemplate = require('templates/breadcrumbTemplate');
 var LanguagesTemplate = require('templates/languagesTemplate');

 var HomeView = View.extend({

  	/*
   	 * @private
   	 */
   	 id: 'home-view',
	/*
   	 * @private
   	 */
   	 homeTemplate: HomeTemplate,
   	 relatedsTemplate: RelatedsTemplate,
   	 breadcrumbTemplate: BreadcrumbTemplate,
   	 languagesTemplate: LanguagesTemplate,

   	 currentNode:'c_4788',
   	 currentLang:'EN',
   	 currentLanguage: 'English',

	//--------------------------------------
  	//+ INHERITED / OVERRIDES
  	//--------------------------------------

	/*
	 * @private
	 */
	 
	 events: {

	 	'click .related-click'	:		'onTriggerNodeClick',
	 	'click .breadcrumb-click':		'onBreadcrumbClick'
	 },

	/*
	 * @private
	 */



	 initialize: function() {




	    // this.json= "{id:\"node02\", name:\"lorem ipsum dolor sit amet lorem ipsum dolor sit amet\", data:{}, children:[{id:\"node13\", name:\"lorem ipsum dolor sit amet\", data:{}, children:[{id:\"node24\", name:\"lorem ipsum dolor sit amet\", data:{}, children:[{id:\"node35\", name:\"3.5\", data:{}, children:[{id:\"node46\", name:\"4.6\", data:{}, children:[]}]}, {id:\"node37\", name:\"3.7\", data:{}, children:[{id:\"node48\", name:\"4.8\", data:{}, children:[]}, {id:\"node49\", name:\"4.9\", data:{}, children:[]}, {id:\"node410\", name:\"4.10\", data:{}, children:[]}, {id:\"node411\", name:\"4.11\", data:{}, children:[]}]}, {id:\"node312\", name:\"3.12\", data:{}, children:[{id:\"node413\", name:\"4.13\", data:{}, children:[]}]}, {id:\"node314\", name:\"3.14\", data:{}, children:[{id:\"node415\", name:\"4.15\", data:{}, children:[]}, {id:\"node416\", name:\"4.16\", data:{}, children:[]}, {id:\"node417\", name:\"4.17\", data:{}, children:[]}, {id:\"node418\", name:\"4.18\", data:{}, children:[]}]}, {id:\"node319\", name:\"3.19\", data:{}, children:[{id:\"node420\", name:\"4.20\", data:{}, children:[]}, {id:\"node421\", name:\"4.21\", data:{}, children:[]}]}]}, {id:\"node222\", name:\"2.22\", data:{}, children:[{id:\"node323\", name:\"3.23\", data:{}, children:[{id:\"node424\", name:\"4.24\", data:{}, children:[]}]}]}]}, {id:\"node125\", name:\"1.25\", data:{}, children:[{id:\"node226\", name:\"2.26\", data:{}, children:[{id:\"node327\", name:\"3.27\", data:{}, children:[{id:\"node428\", name:\"4.28\", data:{}, children:[]}, {id:\"node429\", name:\"4.29\", data:{}, children:[]}]}, {id:\"node330\", name:\"3.30\", data:{}, children:[{id:\"node431\", name:\"4.31\", data:{}, children:[]}]}, {id:\"node332\", name:\"3.32\", data:{}, children:[{id:\"node433\", name:\"4.33\", data:{}, children:[]}, {id:\"node434\", name:\"4.34\", data:{}, children:[]}, {id:\"node435\", name:\"4.35\", data:{}, children:[]}, {id:\"node436\", name:\"4.36\", data:{}, children:[]}]}]}, {id:\"node237\", name:\"2.37\", data:{}, children:[{id:\"node338\", name:\"3.38\", data:{}, children:[{id:\"node439\", name:\"4.39\", data:{}, children:[]}, {id:\"node440\", name:\"4.40\", data:{}, children:[]}, {id:\"node441\", name:\"4.41\", data:{}, children:[]}]}, {id:\"node342\", name:\"3.42\", data:{}, children:[{id:\"node443\", name:\"4.43\", data:{}, children:[]}]}, {id:\"node344\", name:\"3.44\", data:{}, children:[{id:\"node445\", name:\"4.45\", data:{}, children:[]}, {id:\"node446\", name:\"4.46\", data:{}, children:[]}, {id:\"node447\", name:\"4.47\", data:{}, children:[]}]}, {id:\"node348\", name:\"3.48\", data:{}, children:[{id:\"node449\", name:\"4.49\", data:{}, children:[]}, {id:\"node450\", name:\"4.50\", data:{}, children:[]}, {id:\"node451\", name:\"4.51\", data:{}, children:[]}, {id:\"node452\", name:\"4.52\", data:{}, children:[]}, {id:\"node453\", name:\"4.53\", data:{}, children:[]}]}, {id:\"node354\", name:\"3.54\", data:{}, children:[{id:\"node455\", name:\"4.55\", data:{}, children:[]}, {id:\"node456\", name:\"4.56\", data:{}, children:[]}, {id:\"node457\", name:\"4.57\", data:{}, children:[]}]}]}, {id:\"node258\", name:\"2.58\", data:{}, children:[{id:\"node359\", name:\"3.59\", data:{}, children:[{id:\"node460\", name:\"4.60\", data:{}, children:[]}, {id:\"node461\", name:\"4.61\", data:{}, children:[]}, {id:\"node462\", name:\"4.62\", data:{}, children:[]}, {id:\"node463\", name:\"4.63\", data:{}, children:[]}, {id:\"node464\", name:\"4.64\", data:{}, children:[]}]}]}]}, {id:\"node165\", name:\"1.65\", data:{}, children:[{id:\"node266\", name:\"2.66\", data:{}, children:[{id:\"node367\", name:\"3.67\", data:{}, children:[{id:\"node468\", name:\"4.68\", data:{}, children:[]}, {id:\"node469\", name:\"4.69\", data:{}, children:[]}, {id:\"node470\", name:\"4.70\", data:{}, children:[]}, {id:\"node471\", name:\"4.71\", data:{}, children:[]}]}, {id:\"node372\", name:\"3.72\", data:{}, children:[{id:\"node473\", name:\"4.73\", data:{}, children:[]}, {id:\"node474\", name:\"4.74\", data:{}, children:[]}, {id:\"node475\", name:\"4.75\", data:{}, children:[]}, {id:\"node476\", name:\"4.76\", data:{}, children:[]}]}, {id:\"node377\", name:\"3.77\", data:{}, children:[{id:\"node478\", name:\"4.78\", data:{}, children:[]}, {id:\"node479\", name:\"4.79\", data:{}, children:[]}]}, {id:\"node380\", name:\"3.80\", data:{}, children:[{id:\"node481\", name:\"4.81\", data:{}, children:[]}, {id:\"node482\", name:\"4.82\", data:{}, children:[]}]}]}, {id:\"node283\", name:\"2.83\", data:{}, children:[{id:\"node384\", name:\"3.84\", data:{}, children:[{id:\"node485\", name:\"4.85\", data:{}, children:[]}]}, {id:\"node386\", name:\"3.86\", data:{}, children:[{id:\"node487\", name:\"4.87\", data:{}, children:[]}, {id:\"node488\", name:\"4.88\", data:{}, children:[]}, {id:\"node489\", name:\"4.89\", data:{}, children:[]}, {id:\"node490\", name:\"4.90\", data:{}, children:[]}, {id:\"node491\", name:\"4.91\", data:{}, children:[]}]}, {id:\"node392\", name:\"3.92\", data:{}, children:[{id:\"node493\", name:\"4.93\", data:{}, children:[]}, {id:\"node494\", name:\"4.94\", data:{}, children:[]}, {id:\"node495\", name:\"4.95\", data:{}, children:[]}, {id:\"node496\", name:\"4.96\", data:{}, children:[]}]}, {id:\"node397\", name:\"3.97\", data:{}, children:[{id:\"node498\", name:\"4.98\", data:{}, children:[]}]}, {id:\"node399\", name:\"3.99\", data:{}, children:[{id:\"node4100\", name:\"4.100\", data:{}, children:[]}, {id:\"node4101\", name:\"4.101\", data:{}, children:[]}, {id:\"node4102\", name:\"4.102\", data:{}, children:[]}, {id:\"node4103\", name:\"4.103\", data:{}, children:[]}]}]}, {id:\"node2104\", name:\"2.104\", data:{}, children:[{id:\"node3105\", name:\"3.105\", data:{}, children:[{id:\"node4106\", name:\"4.106\", data:{}, children:[]}, {id:\"node4107\", name:\"4.107\", data:{}, children:[]}, {id:\"node4108\", name:\"4.108\", data:{}, children:[]}]}]}, {id:\"node2109\", name:\"2.109\", data:{}, children:[{id:\"node3110\", name:\"3.110\", data:{}, children:[{id:\"node4111\", name:\"4.111\", data:{}, children:[]}, {id:\"node4112\", name:\"4.112\", data:{}, children:[]}]}, {id:\"node3113\", name:\"3.113\", data:{}, children:[{id:\"node4114\", name:\"4.114\", data:{}, children:[]}, {id:\"node4115\", name:\"4.115\", data:{}, children:[]}, {id:\"node4116\", name:\"4.116\", data:{}, children:[]}]}, {id:\"node3117\", name:\"3.117\", data:{}, children:[{id:\"node4118\", name:\"4.118\", data:{}, children:[]}, {id:\"node4119\", name:\"4.119\", data:{}, children:[]}, {id:\"node4120\", name:\"4.120\", data:{}, children:[]}, {id:\"node4121\", name:\"4.121\", data:{}, children:[]}]}, {id:\"node3122\", name:\"3.122\", data:{}, children:[{id:\"node4123\", name:\"4.123\", data:{}, children:[]}, {id:\"node4124\", name:\"4.124\", data:{}, children:[]}]}]}, {id:\"node2125\", name:\"2.125\", data:{}, children:[{id:\"node3126\", name:\"3.126\", data:{}, children:[{id:\"node4127\", name:\"4.127\", data:{}, children:[]}, {id:\"node4128\", name:\"4.128\", data:{}, children:[]}, {id:\"node4129\", name:\"4.129\", data:{}, children:[]}]}]}]}, {id:\"node1130\", name:\"1.130\", data:{}, children:[{id:\"node2131\", name:\"2.131\", data:{}, children:[{id:\"node3132\", name:\"3.132\", data:{}, children:[{id:\"node4133\", name:\"4.133\", data:{}, children:[]}, {id:\"node4134\", name:\"4.134\", data:{}, children:[]}, {id:\"node4135\", name:\"4.135\", data:{}, children:[]}, {id:\"node4136\", name:\"4.136\", data:{}, children:[]}, {id:\"node4137\", name:\"4.137\", data:{}, children:[]}]}]}, {id:\"node2138\", name:\"2.138\", data:{}, children:[{id:\"node3139\", name:\"3.139\", data:{}, children:[{id:\"node4140\", name:\"4.140\", data:{}, children:[]}, {id:\"node4141\", name:\"4.141\", data:{}, children:[]}]}, {id:\"node3142\", name:\"3.142\", data:{}, children:[{id:\"node4143\", name:\"4.143\", data:{}, children:[]}, {id:\"node4144\", name:\"4.144\", data:{}, children:[]}, {id:\"node4145\", name:\"4.145\", data:{}, children:[]}, {id:\"node4146\", name:\"4.146\", data:{}, children:[]}, {id:\"node4147\", name:\"4.147\", data:{}, children:[]}]}]}]}]}";
	    this.json = "{}"
	    this.collection = new GraphCollection();
            // this.once('getNewNode', this.getNewNode);
            this.initNavigational();
            // this.collection.on('reset', this.getNewNode, this.currentNode);
	    // this.router = new Router();
	    // this.render();
	    _.bindAll( this );


	},


	render: function() {
		var self = this;

		var homeTemplate = this.homeTemplate();
		var relatedsTemplate = this.relatedsTemplate({'related':[]});
		var breadcrumbTemplate = this.breadcrumbTemplate({'breadcrumb':[]});


		self.$el.html(homeTemplate);
		self.$el.find('#related-container').html(relatedsTemplate);
		self.$el.find('#breadcrumb-container').html(breadcrumbTemplate);

		$.get('/json/languages.json', function(data) {
			var languagesTemplate = self.languagesTemplate({'languages':data});
			self.$el.find('#language-container').html(languagesTemplate);    
			self.initLanguages();
		});

     // $.when(self.$el.html(homeview)).then(function (data, self) {
     // });

            // self.router.navigate("api/getnarrowerconcepts/node", {trigger:true});

    	    // this.trigger('getNewNode',this.currentNode);

    	    return self;
    	},


    	getNewNode: function(nodeId) {
    		var self = this;
    		var data;
    		if (typeof nodeId == 'undefined') {
    			nodeId = self.currentNode;
    		}
    		self.collection.url = '/api/getnarrowerconcepts?node=' + nodeId + '&lang='+self.currentLang;
    	    // set Backbone synchronous
    	    self.collection.fetch({async:false})
    	    .done(function() {

    	    	data = self.collection.toJSON();
//        	console.log( JSON.stringify( data, '', '  ' ) );
//	return data;
// return JSON.stringify( data, '', '  ' );

})
    	    .fail(function (){
    	    	self.Spinner.hide();
    	    	self.Log.write('Error retrieving data');
    	    	data = {};

    	    }); 

    	    if (typeof data == 'object' && data.length > 0){
    	    	return data[0];
    	    } else {
    	    	return {};
    	    }



    	},

    	redrawRelated: function(newRelated){
    		$("#relateds").empty();
    		var relatedNumber = newRelated.length;
    		var relatedElementWidth = 100;
    		var relatedSpace = relatedNumber*relatedElementWidth;
    		var canvasWidth = $(window).innerWidth();
    		var relatedSpaceBeginning = canvasWidth/2 - relatedSpace/2;
    		var relatedHeight = 350;
    		var radioDiff = 14;

    		for (var i = 0; i < relatedNumber; i++) {
    			var relHeight = relatedHeight + radioDiff * Math.floor(Math.pow(Math.abs(i-relatedNumber/2), 1.1));
    			var relWidth = Math.floor(relatedSpaceBeginning + i*relatedElementWidth);
    			$("#relateds").append('<div class="related-label" style="top:' + relHeight + 'px; left:' + relWidth + 'px">' + newRelated[i].name + '</div>');
    			this.graph.fx.edgeHelper.line.render({ x: 10, y: 30 }, { x: 10, y: 50 }, viz.canvas);
    		};

    	},
    	initLanguages: function () {     
    		function format(state) {
    			if (!state.id) {
    				return state.text; 
    			}
    			return "<img class='flag' width='16' height='16' src='images/flags/" + state.id.toLowerCase() + ".png'/>"+ state.text;
    		}
    		$("#language").select2({
    			formatResult: format,
    			formatSelection: format,
    			width: '255px',
    			escapeMarkup: function(m) { return m; }
    		});
    		$('#language').select2("val", this.currentLang.toLowerCase()); 

    		$('#language').on('change', this.changeLanguage);
    	},

    	changeLanguage: function (e) {
    		self = this;
    		self.currentLang = e.val.toUpperCase();
         // self.currentLanguage = e.text;
         // self.Log.write('Changed Language to: '+e.text);
         // setTimeout(300, function() {
         //   self.Log.done();
         // });
},


initNavigational: function(nodeId) {
	var self = this;


	self.collection.url = '/api/getnarrowerconcepts?node=' + self.currentNode+'&lang='+self.currentLang;
	self.collection.fetch().done(function() {
		var data = self.collection.toJSON();
          // console.log( JSON.stringify( data, '', '  ' ) );
          self.afterRender();
      }).fail(function (){
      	self.Spinner.hide();
      	self.Log.write('Error retrieving data');
      }); 
      return self;
  },


  afterRender: function () {
  	this.initSearchBox();
  	this.initGraph();
  },

	/*
	initHome: function() {
	    
	    $(this.el).html( this.template({
		'related': [],
		'breadcrumb': []
	    }));
	
},*/

	// dry method for subviews
	// assign : function (view, selector) {
	//     view.setElement(this.$(selector)).render();
	// },
	/*
	fetchCollection: function (e) {
	
	    this.collection.url = '/api/getnarrowerconcepts?node='+ self.currentNode; // 'c_1521';
            this.collection.fetch().done(function (){
        	//this.graphView.initGraph();
        	this.render();
            }).fail(function () {
        	this.graphView.Spinner.hide();
        	this.graphView.Log.write('Error retrieving data');
            });
	
},*/

	/*
	onNodeClick: function(e) {
	    
	    var self = this, related, children, breadcrumb;
	    
	    e.preventDefault();
	    e.stopPropagation();
	    
	    self.collection.url = '/api/getnarrowerconcepts?node='+ self.currentNode; // 'c_1521';
            self.collection.
            fetch({
              success: function(response,xhr) {
                 
                 console.log('onNodeClick:');
                 console.dir(response);
		
		 // related = ( typeof response == 'object' ) ? related : [];
		 
		 // console.dir(response);
		 
		$(self.el).html( self.template({
		'relatedList': [{'name':'test', 'id':'test'}],
		'breadcrumb': [ 
		{
		  'name':'node1',
		  'id': 'node13'
		},
		{
		  'name':'node2',
		  'id': 'node125'
		},
		{
		  'name':'node3',
		  'id': 'node165'
		}]
		}));
*/
		 /*
		 $(self.el).html(self.template({
		  'relatedList': response.related,
		  'breadcrumb': 
		  [{
		    'name':'node1',
		    'id': 'node13'
		  },
		  {
		    'name':'node2',
		    'id': 'node125'
		  },
		  {
		    'name':'node3',
		    'id': 'node165'
		  }]
		}));*/

	    /*
            },
            
            
            
            error: function (errorResponse) {
                console.log('error triggerNodeClick');
                // console.log(errorResponse)

		// console.dir (related);
		$(self.el).html( self.template({
		'relatedList': [{'name':'test', 'id':'test'}],
		'breadcrumb': [ 
		{
		  'name':'node1',
		  'id': 'node13'
		},
		{
		  'name':'node2',
		  'id': 'node125'
		},
		{
		  'name':'node3',
		  'id': 'node165'
		}]
		}));

              }
           });
           
	},
	*/
	
	initSearchBox: function(){
                // sURL = HMP.core.getCallURL('users_json');
                sURL = '/api'
                $("#selector").select2({
                	width: '80%',
                	placeholder: "Search ...",
                	allowClear: true,
                	minimumInputLength: 1,
                        ajax: { // instead of writing the function to execute the request we use Select2's convenient helper
                        url: sURL,
                        cache: true,
                        dataType : 'json',
                        data: function (term, page) {
                        	return {
                        		q: term
                        	};
                        },
                        results: function (data, page) {
                        	return {
                        		results: data
                        	};
                        }
                    },
                                /*
                                formatResult: function(item) {
                                    return "aaa";
                                },
                                formatSelection: function(item) {
                                    return "bbbb";
                                },
                                id: function (obj) {
                                  return "aaaa";
                                },
                                */
                                dropdownCssClass: "bigdrop"
                                // escapeMarkup: function (m) { return m; } // we do not want to escape markup since we are displaying html in results
                            });

},


	//--------------------------------------
	//+ PUBLIC METHODS / GETTERS / SETTERS
	//--------------------------------------
	
	//--------------------------------------
	//+ EVENT HANDLERS
	//--------------------------------------
	
	onTriggerNodeClick: function () {

		alert('trigger test');
	},

	onBreadcrumbClick: function (e) {

		e.stopImmediatePropagation();

		var dataId = $(e.currentTarget).data('id');
	    // var id = clickedEl.attr("id");
	    // $('#'+e.target.id).trigger('click');

	    console.log(dataId);
	    $('#'+dataId).trigger('click');
	    
	    //e.preventDefault();
	    //e.stopImmediatePropagation();
	    

	},


	//--------------------------------------
	//+ PRIVATE AND PROTECTED METHODS
	//--------------------------------------


        //----------------------------------------------------------
        //+ JavaScript InfoVis Toolkit http://philogb.github.io/jit/
        //----------------------------------------------------------


        /*
         * @private
         */

         labelType : '', 
         useGradients: '', 
         nativeTextSupport: '', 
         animate: '', 
         graph: '',
         json: '',

         breadCrumbs: null,



        //--------------------------------------
        //+ PUBLIC ATTRIBUTES
        //--------------------------------------


        //--------------------------------------
        //+ PUBLIC METHODS
        //--------------------------------------

        updateRelated: function (newRelated){


        	var relatedsTemplate = this.relatedsTemplate({'related':newRelated});


         // $.when(this.$el.html(compiled)).then(function (data, this) {
         // })

this.$el.find('#related-container').html(relatedsTemplate);

         // return this;
         
         // $(self.el).html( self.template({
         //  'relatedList': newRelated
         // }));


},


initGraph: function() {

	var ua = navigator.userAgent,
	iStuff = ua.match(/iPhone/i) || ua.match(/iPad/i),
	typeOfCanvas = typeof HTMLCanvasElement, 
	nativeCanvasSupport = (typeOfCanvas == 'object' || typeOfCanvas == 'function'),
	textSupport = nativeCanvasSupport && (typeof document.createElement('canvas').getContext('2d').fillText == 'function');

           //I'm setting this based on the fact that ExCanvas provides text support for IE
           //and that as of today iPhone/iPad current text support is lame
           this.labelType = (!nativeCanvasSupport || (textSupport && !iStuff))? 'Native' : 'HTML';           
           this.nativeTextSupport = this.labelType === 'Native';
           this.useGradients = nativeCanvasSupport;
           this.animate = !(iStuff || !nativeCanvasSupport);


           this.draw();
       },


        //--------------------------------------
        //+ PRIVATE METHODS
        //--------------------------------------


         /*   
          var getTree = function() {
               var i = 0;
               return function(nodeId, level) {
                 var subtree = eval('(' + json.replace(/id:\"([a-zA-Z0-9]+)\"/g, 
                 function(all, match) {
                   return "id:\"" + match + "_" + i + "\""  
                 }) + ')');
                 $jit.json.prune(subtree, level); i++;
                 
                 return {
                     'id': nodeId,
                     'children': subtree.children,
                     'related': subtree.children
                 };
               };
            };
            */

            getTree: function(nodeId, level) {
                 // newNode=JSON.parse("http://kos.appgee.net/api/getnarrowerconcepts?node=c_3");
                 // console.dir(newNode);
                // this.Log.loading();
                var newNode = this.getNewNode(nodeId);
                this.updateRelated(newNode.related);
                this.redrawRelated(newNode.related);
                // console.dir(newNode);
                 // return {

                 //      'name': 'dolor ipsum sit amed level: ' + level + ' nodeId: '+ nodeId,
                 //      'id': Math.floor(Math.random()*1000+1),
                 //      'children': [{'name': 'dolor ipsum sit amed1','id': Math.random(10000)},{'name': 'dolor ipsum sit amed1','id': Math.random(10000)},{'name': 'dolor ipsum sit amed1','id': Math.random(10000)}],
                 //      'related': [{'name': 'dolor ipsum sit amed1','id': Math.random(10000)},{'name': 'dolor ipsum sit amed1','id': Math.random(10000)},{'name': 'dolor ipsum sit amed1','id': Math.random(10000)}]
                 //  };

                 
                 return {

                      'name': newNode.name, //'dolor ipsum sit amed level: ' + level + ' nodeId: '+ nodeId,
                      'id': Math.floor(Math.random(10000)), // newNode.id, 
                      'children': newNode.children, // [{'name': 'dolor ipsum sit amed1','id': Math.random(10000)},{'name': 'dolor ipsum sit amed1','id': Math.random(10000)},{'name': 'dolor ipsum sit amed1','id': Math.random(10000)}],
                      'related': newNode.related// [{'name': 'dolor ipsum sit amed1','id': Math.random(10000)},{'name': 'dolor ipsum sit amed1','id': Math.random(10000)},{'name': 'dolor ipsum sit amed1','id': Math.random(10000)}]
                  };
              },



              draw: function (){

              	var self = this;


           //Implement a node rendering function called 'nodeline' that plots a straight line
           //when contracting or expanding a subtree.
           $jit.ST.Plot.NodeTypes.implement({
           	'nodeline': {
           		'render': function(node, canvas, animating) {
           			if(animating === 'expand' || animating === 'contract') {
           				var pos = node.pos.getc(true), nconfig = this.node, data = node.data;
           				var width  = nconfig.width, height = nconfig.height;
           				var algnPos = this.getAlignedPos(pos, width, height);
           				var ctx = canvas.getCtx(), ort = this.config.orientation;
           				ctx.beginPath();
           				if(ort == 'left' || ort == 'right') {
           					ctx.moveTo(algnPos.x, algnPos.y + height / 2);
           					ctx.lineTo(algnPos.x + width, algnPos.y + height / 2);
           				} else {

                     // var _random = Math.abs(Math.floor(Math.random()*100)+1);
                     // console.log('y: '+algnPos.y+' random: '+_random);
                     ctx.moveTo(algnPos.x + width / 2, algnPos.y );
                     ctx.lineTo(algnPos.x + width / 2, algnPos.y + height);
                 }
                 ctx.stroke();
             } 
         }
     }
 });


           //Create a new ST instance
           self.graph = new $jit.ST({
           	injectInto: 'infovis',
           	orientation: 'bottom',
               //set duration for the animation
               duration: 800,
               //set animation transition type
               transition: $jit.Trans.Quart.easeInOut,
               //set distance between node and its children
               levelDistance: 90,
               /*
               function () {
                 // var a = Math.abs(Math.floor((Math.random()*1000)+1));
                 // console.log(a);
                 return 200;
             },*/

               //set max levels to show. Useful when used with
               //the request method for requesting trees of specific depth
               levelsToShow: 1,
               //set node and edge styles
               //set overridable=true for styling individual
               //nodes or edges
               Navigation: {
               	enable:true,
               	panning:true
                 // zooming:10
             },
             Events: {
             	enable:true,
             	onClick: function (nodeId, eventInfo, e){
       	            // alert('nodeId: '+nodeId);
       	            // self.Log.loading();

       	        },
       	        onTouchMove: function (nodeId, eventInfo, e) {
       	        	alert('a');
       	        }
       	    },
       	    Node: {
       	    	height: 30,
       	    	width: 100,
                   //use a custom
                   //node rendering function
                   type: 'nodeline',
                   color:'#00DD00',
                   lineWidth: 2,
                   align:"center",
                   overridable: true
               },

               Edge: {
               	type: 'bezier',
               	lineWidth: 2,
               	color: '#444444',
                   // color:'#23A4FF',
                   overridable: true
               },

               request: function(nodeId, level, onComplete) {

               	self.Log.loading();

               	var ans = eval(self.getTree(nodeId, level));
                   // console.log('id: '+nodeId+' level: '+level);

                 // console.dir(ans);
                 onComplete.onComplete(nodeId, ans);  
             },

             onBeforeCompute: function(node){
                   // self.Log.loading();
               },

               onAfterCompute: function(){
               	self.Log.done();
               	self.Spinner.hide();
               },

               //This method is called on DOM label creation.
               //Use this method to add event handlers and styles to
               //your node.
               onCreateLabel: function(label, node){
               	label.id = node.id;            
               	label.innerHTML = node.name;
               	label.onclick = function(){
               		self.graph.onClick(node.id);
               	};
                   //set label styles
                   var style = label.style;
                   style.width = 100 + 'px';
                   style.height = 'auto';            
                   style.cursor = 'pointer';
                   // style.color = 'black';
           	    // style.backgroundColor = '#1a1a1a';
                   // style.fontSize = '12px';
                   style.textAlign= 'center';
               },

               onBeforePlotNode: function(node){

               	if (node.selected) {
               		node.data.$color = "#ff7";

                       // node.data.$color = "#23A4FF";
                       
                   }
                   else {
                   	delete node.data.$color;
                   }
               },

               onBeforePlotLine: function(adj){
               	if (adj.nodeFrom.selected && adj.nodeTo.selected) {
                       // adj.data.$color = "#eed";

                       adj.data.$color = "#23A4FF";
                       adj.data.$lineWidth = 4;
                   }
                   else {
                   	adj.data.$color = "#666";
                       // delete adj.data.$color;
                       delete adj.data.$lineWidth;
                   }
               },

               onPlaceLabel: function(label, node, controllers){          

               	var style = label.style;  
               	if (node.selected) {    
               		style.color = '#23A4FF';
               		style.fontSize = '15px';
               		style.lineHeight='15px';
               		style.fontWeight = 'bold';
               	}
               	else {
               		style.color = '#666';
               		style.fontSize = '13px';
               		style.lineHeight='13px';
               		style.fontWeight = 'normal';
               	}
                   // show the label and let the canvas clip it
                   style.display = ''; 
               }       
           });

           // load json data
           self.graph.loadJSON(eval( '(' + self.json + ')' ));
           // compute node positions and layout
           self.graph.compute();
           // emulate a click on the root node.
           self.graph.onClick(self.graph.root);
           
           return self;
       },



       ////////////////////////////////////
       //+      SUBCLASSES
       ////////////////////////////////////
       
       

       Log: {

       	elem: false,

       	write: function(txt){
       		if (!this.elem) {
       			this.elem = $('#log');
       		}      
       		this.elem.attr("style", "opacity:1;");
       		this.elem.text(txt);
       	},
       	loading: function(txt){
       		if (!this.elem) {
       			this.elem = $('#log');
       		}      
       		this.elem.attr("style", "opacity:1;")    
       		this.elem.text('loading...');
       	},
       	done: function(txt){
       		if (!this.elem) {
       			this.elem = $('#log');
       		}      
       		this.elem.attr("style", "opacity:0;")    
           // this.elem.text('done');
       }
   },




   Spinner: {

   	elem: false,
   	show: function () {
   		if (!this.elem) {
   			this.elem = $("#spinner");
   		}
   		this.elem.attr("style", "display:block;");

   	},
   	hide: function () {
   		if (!this.elem) {
   			this.elem = $("#spinner");
   		}
   		this.elem.attr("style", "display:none;");
   	} 
   }


});


module.exports = HomeView;
