<script setup>
import { VPTeamMembers } from 'vitepress/theme'

const default_image = 'https://assets-prod.sumo.prod.webservices.mozgcp.net/static/default-FFA-avatar.2f8c2a0592bda1c5.png';
const members = [
  {
    avatar: default_image,
    name: 'Randy Ali, CEO at Gymscanner',
    title: '"This man is a true genius. Brilliant work."',
  },
  {
    avatar: default_image,
    name: 'Cesar Pea, CEO at Mykeyback24',
    title: '"Really nice developer patient and really helpful. 100% recommend."',
  },
  {
    avatar: default_image,
    name: 'Luke Stocks',
    title: '"Great Service, very pleased. Will be using again in the future."',
  },
  {
    avatar: default_image,
    name: 'Arthur Sevi',
    title: '"It is very pleasant to work with him. He\'s a great developer."',
  },
  {
    avatar: default_image,
    name: 'Nicolas Faubert',
    title: '"Great Master Skills ! Thanks a lot for this great work."',
  },
  {
    avatar: default_image,
    name: 'Mr. Zaid',
    title: '"Great delivery and amazing communication!"',
  },
]
</script>

# Testimonials

Hear what others have to say about working with me:

## Client Testimonials

<VPTeamMembers size="small" :members="members" />
