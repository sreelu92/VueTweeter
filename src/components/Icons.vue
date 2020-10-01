<template>
    <div id="container">
        <img id="iconImage1" @click="gotoProfile"
        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAdVBMVEX///8AAADo6OjBwcGmpqaHh4ff39/FxcV6enqzs7Pj4+Pt7e34+PjV1dVWVlby8vLY2NhmZmbOzs6UlJQmJiZhYWEtLS22trZOTk42NjZERERzc3OgoKAICAg6OjqQkJAXFxdISEgdHR0RERFaWloaGhpvb2/vAamcAAADZElEQVR4nO3b23aiMBSAYQ4ioCJF1KKVqrUz7/+IQwJOtQIWG8Cw/u+uxIu9F2TnWMMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA6r3Y/si3X/oOoy1uZJ5Fbt/BtOB1aV5avvYdkGKTxPwumfQdlEr2TX6C3XdY6ozyjDbxIsz+ChfxJn8w6jswVXyZzvayurhb+czvLSalAplM/O1pLJ8OY+CoeFv5m+0hHuWcqh4ne6fTeTzKWSKPVWnTSjRZHcejnnyF09KmqWjadxyPcjMxlfEqGj0xuZl1Go96QV3FlI1Bp/GoF9e9JvmCvw8junmrrDOCqDVvHUbThmNNN8w74rHDaNqwrh3zRKHddBhNGzaDzzCp7WmilyYdRtMG0dPmla3z2l6qh12WwymsaAxPWeuu03jUG4tBvWrfyRWN407jacG2ZkAUw+G202jasKuetr2YA/hIs5lZmqXxXtr0nrWkuk+8jWKhW1YwvcFsRm3L1/Jy4ah/LxTkQtdcXa+Cp5/iYVq+NNZOvtmWxl/DYhin5hDWhv8FxSb3fOROphN3NC/+HkyChjFZl2zqrwd1cDFzbhJ0BjBOXBmvrvJbDeoFFqaj5ENm95GMBlJDb83GQRCMh/Z5Angioes70TyZR47vVu1raGzhpFfjYeos+g5JJWt/KJm1Hfb6nx3mLK8kvZw3iBzji4yWySpaHS9vR+l+8pQtnM7prD37ayo6sb3zamOp+RJqd/4cb/NYnD9erXfbiiScinP8Ykml8b5+vpb/rC4nVvGLDmNSKr+PWL9fmF950/T8SV6YPdwrJIE4nTH/dhKRYnuZ4P2lrnXSdNSQV0oPP5l/yjM2/S6bhrJ//WwzRp7ApbpNxqMm7+VV/DhqNR7lFs3GOTlu6jW5kQdnDX4vMtTqlEaWmSb/byCv0+r0TxhiqtLsnsxar6mNLI7Nbqn7Py+9z0AM9n+aVf9Q7ALoc5tWfHJNrxyK61HrVqJpgfVI2ZDFSZfjDP+RYKfN+25/vMaVVKi/xfhc3h9aDol5Xvm9m+dzf91bRq6FW4imBTO5NePazbhy00aPo0XLfJwexXTyiwz1mNXMfpGhHl+p4af3Uyl10mU8NELrMbptZAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACo9A+crRkw+5Bz8wAAAABJRU5ErkJggg==" alt="image of profile icon">

    </div>
</template>

<script>
    export default {
        name:"icon-page",
        methods: {
           gotoProfile:function(){
           this.$router.push({ name: "profile-page" });

           }
        },
        
    }
</script>

<style lang="scss" scoped>
*{
    margin: 0;
    padding:0;
}
#container{
    #iconImage1{
        width:30%;
        margin-left: 50vw;

    }

}

</style>