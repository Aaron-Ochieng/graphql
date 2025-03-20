export const auth_ui = `
    <div class="login-container">
        <div class="login-header">
            <h2>Login</h2>
        </div>
        <div id="login-form">
            <div class="input-group">
                <label for="username">Username /  Email</label>
                <input type="text" id="username" name="username" required>
            </div>
            <div class="input-group">
                <label for="password">Password:</label>
                <input type="password" id="password" name="password" required>
            </div>
            <button id="submit">Login</button>
        </div>
    </div>
`

export const content_ui = `
    <div class="grid-container">
        <div class="grid-item">
            <div class="icon">
                
            </div>
            <div class="user-details">
                <p class="username"></p>
                <p class="login"></p>
                <p class="mail"></p>
                <p class="campus"></p>
            </div>
        </div>
        <div class="grid-item">
            <div class="points">
            <span>
                <p>Audit ratio :</p>
                <p id="auditRatio"></p>
            </span>

            <span>
                <p>Level</p>
                <p id="userlevel"></p>
            </span>
            <span>
                <p>Level</p>
                <p id="level"></p>
            </span>
            </div>
           
        </div>
        <div class="grid-item">
            <div class="points">
                <h2>XP progression</h2> 
                <div id="chart-container"></div>
                <div class="tooltip" id="tooltip"></div>
            </div>
        </div>
        <div class="grid-item">Item 3</div>
    </div>
`