function toggleTheme() 
{
    let previousTheme = localStorage.getItem("style");
    let newTheme;
    if(previousTheme == "light")
    {
        newTheme = "dark";
    }
    else
    {
        newTheme = "light";
    }
    document.getElementById('switcher-id').href = `./themes/${newTheme}.css`;
    document.getElementById('theme-button').innerHTML = newTheme === 'light' ? 'Switch to Dark' : 'Switch to Light';
    localStorage.setItem('style', newTheme);
    document.getElementById("root").classList.remove("hidden");
    console.log('Previous theme', previousTheme);
    console.log('new theme:', newTheme);
};


window.onload = function() 
{
    let savedTheme = localStorage.getItem('style') === "light"? "dark" : "light";
    localStorage.setItem("style", savedTheme)
    toggleTheme()
};

document.getElementById('theme-button').addEventListener('click', toggleTheme);