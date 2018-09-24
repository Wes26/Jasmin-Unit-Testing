$(
    (function () {

        describe("RSS Feeds", function () {

            it("are defined", function () {
                expect(allFeeds).toBeDefined();
                expect(allFeeds.length).not.toBe(0);
            });

            /* test that loops through each feed */


            it("url's are being defined", function () {

                allFeeds.forEach(function (theFeed) {
                    expect(theFeed.url).toBeDefined();
                    expect(theFeed.url.length).not.toBe(0);
                });
            });

            /* test that loops through feeds in allFeeds object .*/

            it("names are being defined", function () {

                allFeeds.forEach(function (theFeed) {
                    expect(theFeed.name).toBeDefined();
                    expect(theFeed.name.length).not.toBe(0);
                });
            });

        });

        describe("The menu", function () {

            /* test shows menu is hidden by default. */

            it("element is hidden by default", function () {
                expect($("body").hasClass("menu-hidden")).toBe(true);
            })
        });

        /* test ensures the menu changes visibility when the menu icon is clicked. */

        it("changes visibility when clicked", function () {

            let burger = $("a.menu-icon-link");

            burger.click();
            expect($("body").hasClass("menu-hidden")).toBe(false);

            burger.click();
            expect($("body").hasClass("menu-hidden")).toBe(true);
        });

        describe("Initial Entries", function () {

            /* 
                test that ensures there is at least a single 
               .entry element within the .feed 
            */

            beforeEach(function (done) {
                loadFeed(0, done);
            });

            it("is at least a single .entry element", function () {
                expect($(".feed .entry").length).toBeGreaterThan(0);
            });
        });

        describe("New Feed Selection", function () {

            /* beforeEach function waits for async calls to be finish */

            beforeEach(function (done) {

                loadFeed(0, function () {
                    prevUrl = $(".feed").html();
                });

                loadFeed(1, () => {
                    newUrl = $(".feed").html();
                    done();
                });
            });

            it("new feed is loaded successfully", function () {
                expect(prevUrl).not.toBe(newUrl);
            })
        });
    })()
);