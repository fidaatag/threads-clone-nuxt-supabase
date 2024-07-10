<template>
  <MainLayout>
    <div id="IndexPage" class="w-full overflow-auto no-scrollbar">
      <div class="mx-auto max-w-[500px] overflow-hidden">
        <div id="Posts" class="px-4 max-w-[600px] mx-auto">
          <!-- looping here -->
          <div v-if="isPosts" v-for="post in posts" :key="post">
            <!-- {{ post }} -->
            <Post :post="post" @isDeleted="posts = []" />
            <Post :post="post" @isDeleted="posts = []" />
            <Post :post="post" @isDeleted="posts = []" />
            <Post :post="post" @isDeleted="posts = []" />
          </div>
        </div>
      </div>
    </div>
  </MainLayout>
</template>

<script setup>
  import MainLayout from "~/layouts/MainLayout.vue";

  import { useUserStore } from "~/stores/user";
  const useStore = useUserStore()
  const user = useSupabaseUser()

  let posts = ref([])
  let isPosts = ref(true)
  let isLoading = ref(false)

  watchEffect(() => {
    if(!user.value) {
      return navigateTo('/auth')
    }
  })

  onBeforeMount(() => {
    posts.value = [
      {
        name: 'Diary Budi',
        image: 'https://placehold.co/100',
        text: 'This is the title of diary budi',
        picture: 'https://placehold.co/500',
      }
    ]
  })
</script>