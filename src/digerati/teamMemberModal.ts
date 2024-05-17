/**
 * Team Member Modal.
 * 
 * Dynamically populate Team Member Modal
 * with Team Member details.
 * 
 * @author <cabal@digerati.design>
 */
export const teamMemberModal = () => {
    const showModalLinks = document.querySelectorAll('[data-modal="show"]'),
        modal = document.querySelector('[data-modal="component"]');
    if (!showModalLinks || !modal) {
        return;
    }
    showModalLinks.forEach((showModalLink) => {
        showModalLink.addEventListener('click', () => {
            let teamMember = showModalLink.closest('[data-team-member="component"]');
            if (!teamMember) {
                return false;
            }
            modal.querySelector(['[data-modal="name"]']).innerText = teamMember.querySelector('[data-team-member="name"]').innerText;
            modal.querySelector(['[data-modal="job-title"]']).innerText = teamMember.querySelector('[data-team-member="job-title"').innerText;
            modal.querySelector(['[data-modal="biography"]']).innerText = teamMember.querySelector('[data-team-member="biography"]').innerText;
        }, { passive: true });
    });
};