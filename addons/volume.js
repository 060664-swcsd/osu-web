//sample
{
	Metadata : 
	{
		//id�es prises des paquets deb "man deb-control"
		
		Package : "volume",
		Maintainer : "TheCam�l�on",
		Description : "R�gle le son depuis le menu",
		Homepage : "http://pictuga.tk/"
		//Depends
		//Conflicts
	},
	
	Running : true,
	ActivationKey : "m",
	
	Functions : 
	{
		//d�s-active le greffon
		switchOn : function(){},
		switchOff : function(){},
		
		//fonctions pr�-existantes
		initBeatMap : function(){},
		updateBeatMap : function(){},
		resizeBeatMap : function(){},
		
		//�v�nements du jeu
		end : function(){},
		
		//events
		load : function(){}
	}
}
