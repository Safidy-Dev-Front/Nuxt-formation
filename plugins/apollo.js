export default defineNuxtPlugin((nuxtApp)=>{
    const {githubToken} = useRuntimeConfig();
    nuxtApp.hook('apollo:auth', ({client , token})=>{
        if (client === 'secondClient') {
            token.value = githubToken;
          } else if (client === 'default') {
            token.value = null; 
          }
    })
})