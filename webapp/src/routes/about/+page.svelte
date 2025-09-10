<script>
    const team = [
        { name: "Sanabel", role: "Lead Developer", img: "https://i.pravatar.cc/100?u=sanabel" }
    ];
</script>

<div class="about-container">
    <h1>About Us</h1>
    <p>
        Welcome to Sanabel WebApp! We are passionate about building modern, user-friendly web experiences.<br>
        Our mission is to deliver high-quality solutions that empower our users and make a positive impact.
    </p>
    <h2 style="text-align:center; margin-bottom:1rem;">Our Team</h2>
    <div class="team">
        {#each team as member}
            <div class="member">
                <img src={member.img} alt={member.name} />
                <h3>{member.name}</h3>
                <span>{member.role}</span>
            </div>
        {/each}
    </div>
</div>