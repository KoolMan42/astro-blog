<script lang="ts">
    import Typewriter from "svelte-typewriter";
</script>

<style>
#typewriter{
--cursor-color: rgb(4 120 87);
}

</style>


<section id="typewriter" class="text-emerald-700 text-center">
        <h1 class="text-7xl mx-auto">This is a blog</h1>
        <Typewriter mode="loopRandom" wordInterval={2000} >
            <p>Random thoughts</p>
            <p>🦀🦀🦀🦀🦀🦀🦀🦀</p>
            <p>🌊🔋⚡</p>
        </Typewriter>
    
</section>
