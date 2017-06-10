/* WTF Client by towa0131 */

/* MainActivity */
	var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();

/* Android */
	var Button = android.widget.Button;
	var LinearLayout = android.widget.LinearLayout;
	var RelativeLayout = android.widget.RelativeLayout;
	var PopupWindow = android.widget.PopupWindow;
	var ScrollView = android.widget.ScrollView;
	var TextView = android.widget.TextView;
	var CheckBox = android.widget.CheckBox;
	var Toast = android.widget.Toast;
	var Runnable = java.lang.Runnable;
	var View = android.view.View;
	var ColorDrawable = android.graphics.drawable.ColorDrawable;
	var Color = android.graphics.Color;
	var Gravity = android.view.Gravity;
	var Intent = android.content.Intent;
	var Uri = android.net.Uri;
	var Switch = android.widget.Switch;

/* Info */
	var title = "WTF";
	var version = "1.0.0 beta";

	var loggin = false;

/* Mods */
	var spam = false;
	var spammer = "WTF";
	var spam_message = "<"+ spammer +"§f> What the Fuck!?";
	var tapdestroy = false;
	var fly = false;

/* Buttons */
	var ButtonWindow2;
	var ButtonWindow3;

/* Button Set */
		SetButton();

/* Main Function */
	function SetButton(option){
		if(option == null) option = 0;
		switch(option){
		case 0:
			ctx.runOnUiThread(new java.lang.Runnable({ run: function() {
			try{
			ButtonWindow = new android.widget.PopupWindow();
			ButtonLayout = new android.widget.RelativeLayout(ctx);
			Button = new android.widget.Button(ctx);
			Button.setText("WTF");

			Button.setOnClickListener(new android.view.View.OnClickListener(){ 
			onClick: function(view) {
				DeleteButton();
				SetButton(1);
				SetButton(2);
				SetButton_Exit();
				clientMessage("§l§eサーバーの情報");
				clientMessage("§l§bIP:§a"+ Server.getAddress() + " §bポート:§a"+ Server.getPort());
				clientMessage("§l§bワールド§a"+ getWorld());
			}});

			ButtonLayout.addView(Button);
			ButtonWindow.setContentView(ButtonLayout);
			ButtonWindow.setWidth(android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT);
			ButtonWindow.setHeight(android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT);
			ButtonWindow.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));
			ButtonWindow.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.RIGHT | android.view.Gravity.BOTTOM, 0, 0);

			}catch(problem){
				print("エラーが発生しました" + problem);
			}}}));
		break;
		case 1:
			ctx.runOnUiThread(new java.lang.Runnable({ run: function() {
			try{
			ButtonWindow2 = new android.widget.PopupWindow();
			ButtonLayout2 = new android.widget.RelativeLayout(ctx);
			Button = new android.widget.Button(ctx);
			Button.setText("Fly");

			Button.setOnClickListener(new android.view.View.OnClickListener(){ 
			onClick: function(view) {
				if(fly == false){
					clientMessage("§c[§bWTF§c]§7Fly §aon");
					fly = true;
					Player.setCanFly(1);
					Player.setFlying(true);
				}else{
					clientMessage("§c[§bWTF§c]§7Fly §coff");
					fly = false;
					Player.setCanFly(0);
					Player.setFlying(false);
				}
			}});

			ButtonLayout2.addView(Button);
			ButtonWindow2.setContentView(ButtonLayout2);
			ButtonWindow2.setWidth(android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT);
			ButtonWindow2.setHeight(android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT);
			ButtonWindow2.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));
			ButtonWindow2.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.RIGHT | android.view.Gravity.TOP, 0, 0);

			}catch(problem){
				print("エラーが発生しました" + problem);
			}}}));
		break;
		case 2:
			ctx.runOnUiThread(new java.lang.Runnable({ run: function() {
			try{
			ButtonWindow3 = new android.widget.PopupWindow();
			ButtonLayout3 = new android.widget.RelativeLayout(ctx);
			Button = new android.widget.Button(ctx);
			Button.setText("Tap Destroy");

			Button.setOnClickListener(new android.view.View.OnClickListener(){ 
			onClick: function(view) {
				if(tapdestroy == false){
					clientMessage("§c[§bWTF§c]§7Tap Destroy §aon");
					tapdestroy = true;
				}else{
					clientMessage("§c[§bWTF§c]§7Tap Destroy §coff");
					tapdestroy = false;
				}
			}});

			ButtonLayout3.addView(Button);
			ButtonWindow3.setContentView(ButtonLayout3);
			ButtonWindow3.setWidth(android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT);
			ButtonWindow3.setHeight(android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT);
			ButtonWindow3.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));
			ButtonWindow3.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.RIGHT | android.view.Gravity.TOP, 0, 140);

			}catch(problem){
				print("エラーが発生しました" + problem);
			}}}));
		break;
		}//switch
	}

	function SetButton_Exit(){
		ctx.runOnUiThread(new java.lang.Runnable({ run: function() {

		try{
		ButtonWindow = new android.widget.PopupWindow();
		ButtonLayout = new android.widget.RelativeLayout(ctx);
		Button = new android.widget.Button(ctx);
		Button.setText("Exit");

		Button.setOnClickListener(new android.view.View.OnClickListener(){ 
		onClick: function(view) {
			DeleteButton();
			SetButton();
		}});

		ButtonLayout.addView(Button);
		ButtonWindow.setContentView(ButtonLayout);
		ButtonWindow.setWidth(android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT);
		ButtonWindow.setHeight(android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT);
		ButtonWindow.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));
		ButtonWindow.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.RIGHT | android.view.Gravity.BOTTOM, 0, 0);

		}catch(problem){
			print("エラーが発生しました" + problem);
		}}}));
	}

	function DeleteButton(){
		ctx.runOnUiThread(new java.lang.Runnable({ run: function() {
			if(ButtonWindow != null) {
				ButtonWindow.dismiss();
				Buttonwindow = null;
			}
			if(ButtonWindow2 != null) {
				ButtonWindow2.dismiss();
				Buttonwindow2 = null;
			}
			if(ButtonWindow3 != null) {
				ButtonWindow3.dismiss();
				Buttonwindow3 = null;
			}
		}}));
	}

	function newLevel(){
		if(loggin == false){
			clientMessage("§l§bWTFのバージョン:§e"+ getVersion());
			clientMessage("§l§aMinecraft:PEのバージョン:§e"+ getMinecraftVersion());
		}
		loggin = true;
	}

	function procCmd(cmd){
		if(cmd == "tapdestroy"){
			if(tapdestroy == false){
				clientMessage("§c[§bWTF§c]§7Tap Destroy §aon");
				tapdestroy = true;
			}else{
				clientMessage("§c[§bWTF§c]§7Tap Destroy §coff");
				tapdestroy = false;
			}
		}
		if(cmd == "fly"){
			if(fly == false){
				clientMessage("§c[§bWTF§c]§7Fly §aon");
				fly = true;
				Player.setCanFly(1);
				Player.setFlying(true);
			}else{
				clientMessage("§c[§bWTF§c]§7Fly §coff");
				fly = false;
				Player.setCanFly(0);
				Player.setFlying(false);
			}
		}
	}

	function useItem(x,y,z,id,block,side){
		if(tapdestroy == true){
			Level.destroyBlock(x,y,z,true);
			Level.setTile(x,y,z,0,0);
		}
	}

	function leaveGame(){
		loggin = false;
	}

	function getWorld(){
		var world = Level.getWorldName();
		return world;
	}

	function getVersion(){
		return version;
	}

	function getMinecraftVersion(){
		var mcpeversion = ModPE.getMinecraftVersion();
		return mcpeversion;
	}