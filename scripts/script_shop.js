var logininfo = JSON.parse(localStorage.getItem("logininfo"));
setTimeout(() => {
  document.getElementById("username").value = logininfo[0];
  document.getElementById("useradd").value = logininfo[1];
  document.getElementById("useremail").value = logininfo[2];
}, 100)

var order = [];

const items = [
    ["Robux", "Mobile Legends Diamonds", "Steam Points", "Valorant Points", "Warframe Platinum", "Clash of Clans Gems"],
    ["Finger Sleeves", "Phone Cooler", "Mechanical Keyboard", "Gaming Mouse", "Mouse Pad", "Headphones"],
    ["Motherboard", "CPU", "RAM", "GPU", "Storage", "PSU"],
    ["R2D2", "Minecraft", "GTA V", "Jedi: Survivor", "JoJo’s Bizarre Adventures: Eyes of Heaven", "Escape from Tarkov"]
];

const prices = [
    [800, 2500, 1000, 1000, 170, 55],
    [50, 400, 4000, 375, 100, 350],
    [25000, 22500, 17500, 32500, 17500, 13750],
    [3000, 1600, 850, 3900, 1350, 2800]
];

const description = [
    ["The currency in the game roblox which can be used to buy access to games, accessories, and gamepasses which can provide you with a boost in your gameplay experience.", "The premium currency in mobile legends which can be used to buy skins, heroes, emotes, in-game effects or their version of a battle pass called the starlight pass, which refreshes every month.", "The currency used on steam to streamline selling in-game items like hats in Team Fortress 2 or knives from CS:GO, this currency is also used as the way to buy games from steam or to buy in-game currency from steam games to make a more streamlined experience for users.", "The premium currency in Valorant which can be used to buy different types of gun skins or knives/melee weapons.", "The premium currency in warframe which can be used to buy different things in the game from weapons, cosmetics etc. This currency can also be gained for free by farming for highly sought after items and selling them to other players for a profit.", "The premium currency that is used in-game to speed up building times/upgrade times and used to buy cosmetics for heroes or to buy resources to help your village progress further."],
    ["Commonly used by professional players when playing to reduce friction with the screen leading to smoother screen interactions in their gameplay.", "Used by some players especially those whose phones are specially equipped for gaming to help keep their phone temperature cooler for longer leading to a huge boost in performance.", "The premium keyboards used by the majority of PC users in today's industry for their high customizability and personalization with the option to build your own using parts sold separately so you can mix and match to find the best combination for you. For those just about to enter the world of mechanical keyboards, there are several pre-built models you can buy and use without the extra work of building your own.", "Used by professional gamers in the esports world, gaming mice come with 2-5 programmable buttons for ease in gameplay, a built in sensitivity slider for further customization and/or a smoother interaction with your PC specs with reduced delay between movements i.e.: mouse dragging or clicking.", "Mouse pads are used to keep mice from tracking the table and causing unexpected movements because of it, it also provides a smooth surface for the mouse to move on for further comfort.", "Audio is an important part for any PC, especially for gamers as some games make you rely on audio queues to base your decisions on so buying good headphones are a must for smooth gameplay."],
    ["Feature-rich full-size ATX board - The feature-rich full-size ATX board is designed for demanding users who require top-notch performance and an extensive range of capabilities. Packed with advanced features, this motherboard is ideal for enthusiasts and professionals seeking maximum customization and expandability.", "6-16 core chips (+overclocking) - For users who demand high-performance computing, the 6-16 core chips provide exceptional multitasking capabilities and are suitable for resource-intensive tasks such as content creation, gaming, and video editing. Additionally, the ability to overclock allows for even greater performance gains.", "16GB to 32GB+ of DDR4 (3200MHz+) - With 8GB to 16GB of DDR4 RAM, this memory module ensures smooth multitasking and responsiveness. Its fast speeds enhance system performance, making it an ideal choice for general computer usage and light gaming.", "Higher-tier Nvidia or AMD card - The higher-tier Nvidia or AMD card is designed for demanding gamers and professionals who require exceptional graphics performance. It delivers high frame rates and enables smooth gameplay at high resolutions, making it an excellent choice for gaming enthusiasts and content creators.", "A combo of M.2 (NVMe), 2.5 inch and 3.5 inch storage drives - The combo storage solution provides a versatile setup for users who require ample storage capacity and high-speed performance. With a combination of M.2 NVMe drives, 2.5 inch SSDs, and 3.5 inch HDDs, this configuration allows for faster boot times, quick data transfers, and efficient storage management.", "Upwards of 500W and modular (Gold-rated) - Designed for high-performance systems, this power supply unit delivers robust power output, making it suitable for demanding components and overclocking. With its Gold-rated efficiency and modular design, it offers improved power efficiency, cable management, and overall system performance."],
    ["RDR2 is the epic tale of outlaw Arthur Morgan and the infamous Van der Linde gang, on the run across America at the dawn of the modern age.", "MInecraft is a sandbox game where you can build anything you can imagine or survive in a world of your own and build your dream base among many other possibilities.", "Grand Theft Auto V is a 2013 action-adventure game developed by Rockstar North and published by Rockstar Games. It is the seventh main entry in the Grand Theft Auto series, following 2008's Grand Theft Auto IV, and the fifteenth installment overall.", "Join this game’s main character Cal Kestis and his story so far in the Star Wars universe as he embarks on an epic new adventure that will push Cal further than ever as he fights to protect the galaxy from descending into darkness.", "Join Jotaro and his comrades in a new adventure as they face foes new and old, dead and alive as they find out what is truly happening and reveal the underlying plot against the universe that was staged by DIO , the Joestar family’s oldest enemy as he attains a new power called “Heaven” and find a way to stop him from following through with his plans.", "Escape from Tarkov is a multiplayer tactical first-person shooter video game in development by Battlestate Gamess. The game is set in the fictional Norvinsk region, where a war is taking place between two private military companies (United Security “USEC” and the Battle Encounter Assault Regiment “BEAR”). Players join matches called “raids” in which they fight other players and bots for loot and aim to survive and escape."]
];

function updatetotal() {
    let total = 0;
    for (let i = 0; i < order.length; i++) {
        total += order[i].prod_price;
    }
    document.getElementById("totalprice").innerHTML = '<div id="totalinner"><div id="totalinnerleft"><h2>Total: PHP ' + total + '</h2></div></div>';
}

function removedescription() {
    document.getElementById("description").style.opacity = 0;
    setTimeout(() => {
        document.getElementById("description").style.display = "none";
        document.getElementById("description").style.opacity = 1.0;
    }, 600);
}

function showdescription(category, place) {
    document.getElementById("descriptioninner").innerHTML = '<div><h2>Php ' + prices[category][place] + '</h2><h3>' + items[category][place] + '</h3></div><div><p>' + description[category][place] + '</p></div><button class="btn btn-primary onlyforsmall" onclick="removedescription()">Back</button>';
    document.getElementById("description").style.display = "block";
}

function cancelorder(orderindex) {
    order.splice(orderindex, 1);
    showorder();
}

function showorder() {
    if (order.length == 0) {
        document.getElementById("rightinside").innerHTML = "No Items Ordered";
        document.getElementById("userorder").value = "";
    } else {
        document.getElementById("rightinside").innerHTML = "";
        for (var i = 0; i < order.length; i++) {
            document.getElementById("rightinside").innerHTML += '<div class="mefr"><h2>' + order[i].prod_name + '</h2><h3>Php ' + order[i].prod_price + '</h3><button type="button" class="btn btn-primary" onclick="cancelorder(' + i + ')">Cancel</button></div>'
        }
        document.getElementById("userorder").value = JSON.stringify(order);
    }
    updatetotal();
}

function addtocart(category, place) {   
    let item = { prod_name: items[category][place], prod_price: prices[category][place] };
    order.push(item);
    showorder();
}

function clickcat(btnnum) {
    document.getElementById("cat1").style.display = "none";
    document.getElementById("cat2").style.display = "none";
    document.getElementById("cat3").style.display = "none";
    document.getElementById("cat4").style.display = "none";
    if (btnnum == 1) {
        document.getElementById("cat1").style.display = "block";
    }
    if (btnnum == 2) {
        document.getElementById("cat2").style.display = "block";
    }
    if (btnnum == 3) {
        document.getElementById("cat3").style.display = "block";
    }
    if (btnnum == 4) {
        document.getElementById("cat4").style.display = "block";
    }
}

function cart(){
    document.getElementById("right").style.opacity = "0.0";
    document.getElementById("cart").style.opacity = "1.0";
    document.getElementById("right").style.display = "none";
    document.getElementById("cart").style.display = "block";
    document.getElementById("right").style.zIndex = "9";
    document.getElementById("cart").style.zIndex = "10";
}

function homepage(){
    document.getElementById("cart").style.opacity = "0.0";
    document.getElementById("cart").style.display = "none";
    document.getElementById("right").style.display = "block";
    document.getElementById("right").style.opacity = "1.0";
    document.getElementById("right").style.zIndex = "10";
    document.getElementById("cart").style.zIndex = "9";
}

function about(){
  setTimeout(() => { location.replace("about.html") }, 750);
}