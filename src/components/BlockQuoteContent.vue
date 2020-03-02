<template>
  <blockquote
      cite="https://books.google.com/books?id=dtkIuc0k6rIC&pg=PA159&lpg=PA159&dq=tough-minded+optimists+approach+problems+with+a+can-do+philosophy+and+emerge+strong+from&source=bl&ots=9SQbo8JHRR&sig=ACfU3U0xTitUfVZIypNJuDLyt1lx0h3zgQ&hl=en&sa=X&ved=2ahUKEwimgZSQzbnnAhXXJzQIHcSMBM8Q6AEwAXoECAkQAQ#v=onepage&q=tough-minded%20optimists%20approach%20problems%20with%20a%20can-do%20philosophy%20and%20emerge%20strong%20from&f=false"
  >
    <p>{{content}}</p>
    <footer>
      — {{author}},
      <cite>{{occupation}}</cite>
    </footer>
  </blockquote>
</template>

<script>
  export default {
    props: ['content', 'author', 'occupation']
  }
</script>

<style>
</style>
