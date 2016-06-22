const initialState = [{
  title: `Dog Park`,
  body: `
    The City Council announces the opening of a new Dog Park at
    the corner of Earl and Somerset, near the Ralph’s. They would like
    to remind everyone that dogs are not allowed in the Dog Park.
    People are not allowed in the Dog Park. It is possible you will
    see Hooded Figures in the Dog Park. Do not approach them.
    Do not approach the Dog Park. The fence is electrified and highly dangerous.
    Try not to look at the Dog Park, and especially do not look for any
    period of time at the Hooded Figures. The Dog Park will not harm you.
  `
}, {
  title: `Are we safe from dinosaurs?`,
  body: `
    No way!
  `
}, {
  title: `Drawback`,
  body: `
    Now, there is some concern about the fact that, given we are in
    the middle of a desert, there is no actual water at the waterfront.
    And that is a definite drawback, I agree.
  `
}, {
  title: `Guns don't kill people`,
  body: `
    Guns don’t kill people. It’s impossible to be killed by a gun.
    We are all invincible to bullets and it’s a miracle.
  `
}, {
  title: `Alligators`,
  body: `
    And now a brief public service announcement.
    Alligators: can they kill your children? Yes.
  `
}, {
  title: `Remember`,
  body: `
    Remember: if you see something, say nothing, and drink to forget.
  `
}, {
  title: `Lonliness`,
  body: `
    It has occurred to me that I may be the only one able to see it.
    Now that I think about it, I have also never bothered to check whether
    this mic is actually attached to any sort of recording or broadcasting
    device. And it is possible that I am alone in an empty universe, speaking
    to no one, unaware that the world is held aloft merely by my delusions
    and my smooth sonorous voice.
  `
}, {
  title: `The Moon`,
  body: `
    The moon’s weird though, right? It’s there, and there, and then suddenly
    it’s not. And it seems to be pretty far up. Is it watching us? If not,
    what is it watching instead? Is there something more interesting
    than us? Hey, watch us moon! We may not always be the best show
    in the universe, but we try.
  `
}]

export default function notes(state=initialState, action) {
  return state
}
