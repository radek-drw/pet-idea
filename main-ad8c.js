(() => {
  var e = {
      856: () => {
        const e = [
            { id: "name", errorClass: "error-name", inputClass: "name-input" },
            {
              id: "email",
              errorClass: "error-email",
              inputClass: "email-input",
              pattern: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/,
            },
            {
              id: "message",
              errorClass: "error-message",
              inputClass: "message-input",
            },
          ],
          t = "Brak połączenia z internetem!",
          o =
            "Wystąpił błąd podczas wysyłania formularza. Proszę spróbować ponownie później.",
          s = "Żądany zasób nie został znaleziony.",
          l =
            "Wystąpił wewnętrzny błąd serwera. Proszę spróbować ponownie później.",
          c = "Wystąpił nieoczekiwany błąd. Proszę spróbować ponownie później.",
          n = document.getElementById("myForm"),
          a = document.getElementById("loader"),
          i = document.getElementById("loading-overlay"),
          r = document.querySelector(".success-message"),
          d = document.getElementById("toast");
        function u(e) {
          const t = e ? "block" : "none";
          (i.style.display = t), (a.style.display = t);
        }
        function y(e) {
          (d.style.display = "block"),
            (d.textContent = e),
            setTimeout(() => {
              d.style.display = "none";
            }, 8e3);
        }
        n.addEventListener("submit", async (a) => {
          if ((a.preventDefault(), navigator.onLine)) {
            if (
              (function () {
                let t = !0;
                return (
                  e.forEach((e) => {
                    const o = document.getElementById(e.id).value,
                      s = document.querySelector(`.${e.errorClass}`),
                      l = document.querySelector(`.${e.inputClass}`);
                    "" === o || (e.pattern && !e.pattern.test(o))
                      ? (!(function (e, t) {
                          (t.style.display = "block"),
                            t.setAttribute("aria-live", "assertive"),
                            (e.style.borderColor = "#ff0000"),
                            (e.style.backgroundColor = "#ffeeee");
                        })(l, s),
                        (t = !1))
                      : (function (e, t) {
                          (t.style.display = "none"),
                            (e.style.borderColor = "#d1d1d1"),
                            (e.style.backgroundColor = "transparent");
                        })(l, s);
                  }),
                  t
                );
              })()
            ) {
              u(!0);
              try {
                const e = new FormData(n),
                  t = await fetch("/send_email", { method: "POST", body: e });
                t.ok
                  ? (n.reset(),
                    (r.style.display = "block"),
                    setTimeout(() => {
                      r.style.display = "none";
                    }, 4e3))
                  : (function (e) {
                      let t = o;
                      404 === e ? (t = s) : e >= 500 && (t = l);
                      y(t);
                    })(t.status);
              } catch (e) {
                !(function (e) {
                  console.error("Error:", e), y(c);
                })(e);
              } finally {
                u(!1);
              }
            }
          } else y(t);
        });
      },
      449: () => {
        const e = document.querySelectorAll("#products, #about, #contact"),
          t = document.querySelectorAll(".products, .about, .contact-btn");
        window.addEventListener("scroll", () => {
          const o = window.scrollY;
          e.forEach((e) => {
            const s = e.offsetTop - 500,
              l = e.offsetHeight,
              c = e.getAttribute("id");
            if (o >= s && o < s + l) {
              t.forEach((e) => {
                e.classList.remove("active-navbar-option");
              });
              const e = document.querySelector(`nav a[href*="${c}"]`);
              e && e.classList.add("active-navbar-option");
            }
          });
        });
        const o = document.querySelectorAll(".left a, .contact a");
        o.forEach((e) => {
          e.addEventListener("click", function () {
            o.forEach((e) => {
              e.classList.remove("active-navbar-option");
            }),
              this.classList.add("active-navbar-option");
          });
        });
      },
      722: () => {
        window.addEventListener("scroll", function () {
          if (window.innerWidth >= 480) {
            const e = document.querySelector(".petidea-img"),
              t = document.querySelector("div.middle-logo");
            window.scrollY > 80
              ? ((e.style.transform = "scale(0.8)"),
                (e.style.transformOrigin = "50% 50%"),
                (t.style.top = "10px"))
              : ((e.style.transform = "scale(1.2)"),
                (e.style.transformOrigin = "top center"),
                (t.style.top = "35px"));
          }
        });
      },
      970: () => {
        const e = document.querySelector(".menu"),
          t = document.querySelector(".sidebar-nav"),
          o = document.querySelector(".menu-top"),
          s = document.querySelector(".menu-middle"),
          l = document.querySelector(".menu-bottom"),
          c = document.querySelectorAll(
            ".products-sidebar, .about-sidebar, .contact-btn-sidebar"
          );
        function n() {
          t.classList.remove("active-sidebar"),
            e.classList.remove("active-menu"),
            o.classList.remove("menu-top-click"),
            s.classList.remove("menu-middle-click"),
            l.classList.remove("menu-bottom-click");
        }
        e.addEventListener("click", function () {
          t.classList.toggle("active-sidebar"),
            o.classList.toggle("menu-top-click"),
            s.classList.toggle("menu-middle-click"),
            l.classList.toggle("menu-bottom-click"),
            e.classList.toggle("active-menu"),
            console.log(this);
        }),
          c.forEach((e) => {
            e.addEventListener("click", n);
          });
      },
      393: () => {
        function e(e) {
          for (let t in e)
            if ("toys" === t) e[t].forEach((e) => (e.style.display = "none"));
            else
              for (let o in e[t])
                e[t][o].forEach((e) => (e.style.display = "none"));
        }
        function t(t, o, s, l, c, n, a) {
          let i =
            arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 6;
          e(o);
          let r = "toys" === s ? o[s] : o[s][l];
          for (let e = t; e < t + i; e++)
            e < r.length &&
              ((r[e].style.display = "block"),
              c.appendChild(r[e]),
              (r[e].style.opacity = 0),
              (r[e].style.transform = "translateX(-100px) scale(0.8)"),
              (r[e].style.transition =
                "opacity 0.5s ease-in-out, transform 0.5s ease-in-out"),
              (r[e].style.transitionDelay = 0.1 * (e - t) + "s"),
              setTimeout(() => {
                (r[e].style.opacity = 1),
                  (r[e].style.transform = "translateX(0) scale(1)");
              }, 0));
          n &&
            a &&
            (function (e, t, o, s) {
              (e.disabled = 0 === o),
                (t.disabled = o + 6 >= s.length),
                (e.style.cursor = e.disabled ? "not-allowed" : "pointer"),
                (t.style.cursor = t.disabled ? "not-allowed" : "pointer");
            })(n, a, t, r);
        }
        window.matchMedia("(min-width: 480px)").matches
          ? (function () {
              let o = 0;
              const s = {
                cat: {
                  wet: document.querySelectorAll(".cat-wet div"),
                  dry: document.querySelectorAll(".cat-dry div"),
                },
                dog: {
                  wet: document.querySelectorAll(".dog-wet div"),
                  dry: document.querySelectorAll(".dog-dry div"),
                },
                toys: document.querySelectorAll(".toys div"),
              };
              let l = "cat",
                c = "wet";
              const n = document.querySelector(".cat-wet"),
                a = document.querySelector(".arrow-right-btn"),
                i = document.querySelector(".arrow-left-btn");
              e(s),
                t(o, s, l, c, n, i, a),
                a.addEventListener("click", () => {
                  let e = "toys" === l ? s[l] : s[l][c];
                  o + 6 < e.length && ((o += 6), t(o, s, l, c, n, i, a));
                }),
                i.addEventListener("click", () => {
                  o - 6 >= 0 && ((o -= 6), t(o, s, l, c, n, i, a));
                });
              const r = document.querySelector(".wet"),
                d = document.querySelector(".dry"),
                u = document.querySelector(".cat-option"),
                y = document.querySelector(".dog-option"),
                m = document.querySelector(".toys-option"),
                v = document.querySelector(".section-applaws-logo img");
              r.addEventListener("click", () => {
                "toys" !== l &&
                  ((c = "wet"),
                  (o = 0),
                  t(o, s, l, c, n, i, a),
                  r.classList.add("active-food-option"),
                  d.classList.remove("active-food-option"));
              }),
                d.addEventListener("click", () => {
                  "toys" !== l &&
                    ((c = "dry"),
                    (o = 0),
                    t(o, s, l, c, n, i, a),
                    d.classList.add("active-food-option"),
                    r.classList.remove("active-food-option"));
                }),
                u.addEventListener("click", () => {
                  (v.src = "./assets/images/svg's/applaws-logo.svg"),
                    (v.alt = "Applaws"),
                    (l = "cat"),
                    (o = 0),
                    t(o, s, l, c, n, i, a),
                    u.classList.add("active"),
                    y.classList.remove("active"),
                    m.classList.remove("active"),
                    (r.style.display = "block"),
                    (d.style.display = "block");
                }),
                y.addEventListener("click", () => {
                  (v.src = "./assets/images/svg's/applaws-logo.svg"),
                    (v.alt = "Applaws"),
                    (l = "dog"),
                    (o = 0),
                    t(o, s, l, c, n, i, a),
                    y.classList.add("active"),
                    u.classList.remove("active"),
                    m.classList.remove("active"),
                    (r.style.display = "block"),
                    (d.style.display = "block");
                }),
                m.addEventListener("click", () => {
                  (v.src = "./assets/images/svg's/katido-logo.svg"),
                    (v.alt = "Katido"),
                    (l = "toys"),
                    (o = 0),
                    t(o, s, l, c, n, i, a),
                    m.classList.add("active"),
                    u.classList.remove("active"),
                    y.classList.remove("active"),
                    (r.style.display = "none"),
                    (d.style.display = "none");
                });
            })()
          : (function () {
              let o = 0;
              const s = {
                cat: {
                  wet: document.querySelectorAll(".cat-wet div"),
                  dry: document.querySelectorAll(".cat-dry div"),
                },
                dog: {
                  wet: document.querySelectorAll(".dog-wet div"),
                  dry: document.querySelectorAll(".dog-dry div"),
                },
                toys: document.querySelectorAll(".toys div"),
              };
              let l = "cat",
                c = "wet";
              const n = document.querySelector(".cat-wet");
              e(s), t(o, s, l, c, n, null, null, 1);
              let a = 0,
                i = 0;
              n.addEventListener(
                "touchstart",
                (e) => {
                  a = e.changedTouches[0].screenX;
                },
                !1
              ),
                n.addEventListener(
                  "touchend",
                  (e) => {
                    (i = e.changedTouches[0].screenX),
                      (function () {
                        let e = "toys" === l ? s[l] : s[l][c];
                        i < a &&
                          o + 1 < e.length &&
                          ((o += 1), t(o, s, l, c, n, null, null, 1)),
                          i > a &&
                            o - 1 >= 0 &&
                            ((o -= 1), t(o, s, l, c, n, null, null, 1));
                      })();
                  },
                  !1
                );
              const r = document.querySelector(".wet"),
                d = document.querySelector(".dry"),
                u = document.querySelector(".cat-option"),
                y = document.querySelector(".dog-option"),
                m = document.querySelector(".toys-option"),
                v = document.querySelector(".section-applaws-logo img");
              r.addEventListener("click", () => {
                "toys" !== l &&
                  ((c = "wet"),
                  (o = 0),
                  t(o, s, l, c, n, null, null, 1),
                  r.classList.add("active-food-option"),
                  d.classList.remove("active-food-option"));
              }),
                d.addEventListener("click", () => {
                  "toys" !== l &&
                    ((c = "dry"),
                    (o = 0),
                    t(o, s, l, c, n, null, null, 1),
                    d.classList.add("active-food-option"),
                    r.classList.remove("active-food-option"));
                }),
                u.addEventListener("click", () => {
                  (v.src = "./assets/images/svg's/applaws-logo.svg"),
                    (v.alt = "Applaws"),
                    (l = "cat"),
                    (o = 0),
                    t(o, s, l, c, n, null, null, 1),
                    u.classList.add("active"),
                    y.classList.remove("active"),
                    m.classList.remove("active"),
                    (r.style.display = "block"),
                    (d.style.display = "block");
                }),
                y.addEventListener("click", () => {
                  (v.src = "./assets/images/svg's/applaws-logo.svg"),
                    (v.alt = "Applaws"),
                    (l = "dog"),
                    (o = 0),
                    t(o, s, l, c, n, null, null, 1),
                    y.classList.add("active"),
                    u.classList.remove("active"),
                    m.classList.remove("active"),
                    (r.style.display = "block"),
                    (d.style.display = "block");
                }),
                m.addEventListener("click", () => {
                  (v.src = "./assets/images/svg's/katido-logo.svg"),
                    (v.alt = "Katido"),
                    (l = "toys"),
                    (o = 0),
                    t(o, s, l, c, n, null, null, 1),
                    m.classList.add("active"),
                    u.classList.remove("active"),
                    y.classList.remove("active"),
                    (r.style.display = "none"),
                    (d.style.display = "none");
                });
            })();
      },
    },
    t = {};
  function o(s) {
    var l = t[s];
    if (void 0 !== l) return l.exports;
    var c = (t[s] = { exports: {} });
    return e[s](c, c.exports, o), c.exports;
  }
  (o.n = (e) => {
    var t = e && e.__esModule ? () => e.default : () => e;
    return o.d(t, { a: t }), t;
  }),
    (o.d = (e, t) => {
      for (var s in t)
        o.o(t, s) &&
          !o.o(e, s) &&
          Object.defineProperty(e, s, { enumerable: !0, get: t[s] });
    }),
    (o.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
    (() => {
      "use strict";
      o(856), o(449), o(722), o(970), o(393);
    })();
})();
