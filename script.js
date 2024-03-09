// Sample data for a featured quest and community feed
const featuredQuest = {
  title: "Dragon Slayer Quest",
  description: "Defeat the mighty dragon and save the kingdom!",
  author: "User123",
};

const communityPosts = [
  {
      username: "Gamer1",
      content: "Just reached level 50 in Epic RPG! 💪",
  },
  {
      username: "Gamer2",
      content: "Check out my awesome game screenshot! 📸",
  },
  {
      username: "Gamer3",
      content: "Looking for a clan to join. Any recommendations?",
  },
];

// Function to update the featured quest section
function updateFeaturedQuest() {
  const featuredQuestSection = document.getElementById("featured-quest");
  const questHTML = `
      <h2>${featuredQuest.title}</h2>
      <p>${featuredQuest.description}</p>
      <p>Author: ${featuredQuest.author}</p>
      <button id="join-quest">Join Quest</button>
  `;
  featuredQuestSection.innerHTML = questHTML;

  // Add event listener for the "Join Quest" button
  const joinQuestButton = document.getElementById("join-quest");
  joinQuestButton.addEventListener("click", () => {
      alert("You've joined the quest!");
  });
}

// Function to update the community feed section
function updateCommunityFeed() {
  const communityFeedSection = document.getElementById("community-feed");
  let communityHTML = '<h2>Community Feed</h2>';

  communityPosts.forEach((post) => {
      communityHTML += `
          <div class="post">
              <p><strong>${post.username}</strong>: ${post.content}</p>
          </div>
      `;
  });

  communityFeedSection.innerHTML = communityHTML;
}

// Initial updates to featured quest and community feed
updateFeaturedQuest();
updateCommunityFeed();