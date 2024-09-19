/**
 * Shows the controls for Keyboard and Smartphone.
 */
function showControls() {
    const container = document.getElementById('controls-container');
    container.classList.remove('d-none');
}

/**
 * Closes the controls for Keyboard and Smartphone.
 */
function closeControls() {
    const container = document.getElementById('controls-container');
    container.classList.add('d-none');
}

/**
 * Shows the information for this page.
 */
function showInfo() {
    const container = document.getElementById('info-container');
    container.classList.remove('d-none');
}

/**
 * Closes the information for this page and clears content.
 */
function closeInfo() {
    const container = document.getElementById('info-container');
    container.classList.add('d-none');
    const informationContent = document.getElementById('information-content');
    informationContent.innerHTML = '';
    informationContent.classList.add('d-none');
}

/**
 * Loads the legal notice (Impressum) content.
 */
function loadLegalNotice() {
    let legalNoticeContent = '';

    // Section 1: Information according to § 5 TMG
    legalNoticeContent += `
        <h2>Legal Notice</h2><br>
        <h4>Information according to § 5 TMG (Telemedia Act):</h4>
        <p><strong>Patrick Offermanns</strong><br>
        Ohechaussee 52b<br>
        22848 Norderstedt<br>
        Germany</p><br>
    `;

    // Section 2: Contact
    legalNoticeContent += `
        <h4>Contact:</h4>
        <p>Phone: 0152/33646614<br>
        Email: <a href="mailto:patrick@offermanns.online">patrick@offermanns.online</a></p><br>
    `;

    // Section 3: Responsible for content
    legalNoticeContent += `
        <h4>Responsible for content according to § 55 Abs. 2 RStV (Interstate Broadcasting Treaty):</h4>
        <p><strong>Patrick Offermanns</strong><br>
        Address as above</p><br>
    `;

    // Section 5: Notice regarding EU Dispute Resolution
    legalNoticeContent += `
        <h4>Notice regarding EU Dispute Resolution:</h4>
        <p>The European Commission provides a platform for Online Dispute Resolution (ODR): 
        <a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noopener noreferrer">https://ec.europa.eu/consumers/odr</a>.<br>
        Our email address can be found above in the legal notice.</p><br>
    `;

    // Section 6: Disclaimer
    legalNoticeContent += `
        <h3>Disclaimer:</h3><br>

        <h4>Liability for Content</h4>
        <p>As service providers, we are responsible for our own content on these pages in accordance with § 7 Abs.1 TMG. 
        However, according to §§ 8 to 10 TMG, we are not obliged to monitor transmitted or stored third-party information or to search for circumstances 
        indicating illegal activity.</p>
        <p>Obligations to remove or block the use of information according to general laws remain unaffected. 
        However, liability is only possible from the point in time when a specific infringement becomes known. 
        Upon becoming aware of such violations, we will remove this content immediately.</p><br>

        <h4>Liability for Links</h4>
        <p>Our offer contains links to external websites of third parties, over whose content we have no control. 
        Therefore, we cannot assume any liability for this external content. The respective provider or operator of the linked sites is always responsible for the content of these sites. 
        The linked sites were checked for possible legal violations at the time of linking. Illegal content was not identifiable at the time of linking.</p>
        <p>However, permanent monitoring of the content of the linked pages is not reasonable without specific evidence of a violation of the law. 
        Upon becoming aware of such legal violations, we will remove such links immediately.</p><br>

        <h4>Copyright</h4>
        <p>The content and works on these pages created by the site operators are subject to German copyright law. 
        The duplication, processing, distribution, and any kind of exploitation outside the limits of copyright require the written consent of the respective author or creator. 
        Downloads and copies of this site are only permitted for private, non-commercial use.</p>
        <p>If the content on this site was not created by the operator, third-party copyrights are respected. 
        In particular, third-party content is marked as such. Should you nevertheless become aware of a copyright infringement, 
        please inform us accordingly. Upon becoming aware of legal violations, we will remove such content immediately.</p>
    `;

    // Load legal notice into the container
    const informationContent = document.getElementById('information-content');
    informationContent.innerHTML = '';
    informationContent.innerHTML = legalNoticeContent;
    informationContent.classList.remove('d-none');
}

/**
 * Loads the privacy policy content.
 */
function loadPrivacyPolicy() {
    let privacyPolicyContent = '';

    // Section 1: Introduction
    privacyPolicyContent += `
        <h2>Privacy Policy</h2><br>
        <p>
            We are very pleased about your interest in our game. Data protection is of particular importance to us. 
            The use of our website is possible without providing personal data. 
            However, if a person wishes to use special services via our website, processing of personal data may become necessary.
        </p><br>
    `;

    // Section 2: Responsible party
    privacyPolicyContent += `
        <h4>Responsible Party</h4><br>
        <p>
            <strong>Patrick Offermanns</strong><br>
            Ohechaussee 52b<br>
            22848 Norderstedt<br>
            Germany<br>
            Email: <a href="mailto:patrick@offermanns.online">patrick@offermanns.online</a><br>
            Phone: 0152/33646614
        </p><br>
    `;

    // Section 3: Collection of access data and log files
    privacyPolicyContent += `
        <h4>Collection of Access Data and Log Files</h4><br>
        <p>
            We collect data about every access to the server on which this service is located (so-called server log files) based on our legitimate interests under Art. 6(1) lit. f DSGVO.
            The access data includes the name of the accessed web page, file, date and time of access, 
            amount of data transferred, notification of successful retrieval, browser type and version, the user’s operating system, 
            referrer URL (previously visited page), IP address, and the requesting provider.
        </p><br>
    `;

    // Section 4: Cookies
    privacyPolicyContent += `
        <h4>Cookies</h4><br>
        <p>
            Our website uses cookies. Cookies are text files that are stored on a computer system via an internet browser. 
            Many websites and servers use cookies. Many cookies contain a so-called cookie ID, 
            which is a unique identifier. This allows websites and servers to differentiate the specific browser in which the cookie was stored.
        </p><br>
    `;

    // Section 5: General data and information collection
    privacyPolicyContent += `
        <h4>Collection of General Data and Information</h4><br>
        <p>
            Each time our website is accessed by a person or an automated system, a series of general data and information is collected. 
            This general data and information are stored in the server's log files.
        </p><br>
    `;

    // Section 6: Rights of the data subject
    privacyPolicyContent += `
        <h4>Rights of the Data Subject</h4><br>
        <p>
            Every data subject has the right to access under Art. 15 DSGVO, the right to rectification under Art. 16 DSGVO, 
            the right to erasure under Art. 17 DSGVO, the right to restrict processing under Art. 18 DSGVO, 
            the right to object under Art. 21 DSGVO, and the right to data portability under Art. 20 DSGVO.
        </p><br>
    `;

    // Section 7: Duration of storage of personal data
    privacyPolicyContent += `
        <h4>Duration of Storage of Personal Data</h4><br>
        <p>
            The criterion for the duration of the storage of personal data is the respective legal retention period. 
            After the expiration of this period, the corresponding data is routinely deleted, provided it is no longer required for contract fulfillment or contract initiation.
        </p><br>
    `;

    // Load privacy policy into the container
    const informationContent = document.getElementById('information-content');
    informationContent.innerHTML = '';
    informationContent.innerHTML = privacyPolicyContent;
    informationContent.classList.remove('d-none');
}
