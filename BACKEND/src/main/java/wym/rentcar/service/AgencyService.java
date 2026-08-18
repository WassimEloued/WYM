package wym.rentcar.service;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;
import wym.rentcar.dto.AgencyRequest;
import wym.rentcar.dto.AgencyResponse;
import wym.rentcar.entity.Agency;
import wym.rentcar.exception.ResourceNotFoundException;
import wym.rentcar.repository.AgencyRepository;
import wym.rentcar.entity.User;
import wym.rentcar.repository.UserRepository;

@Service
@RequiredArgsConstructor
public class AgencyService {

    private final AgencyRepository agencyRepository;
    private final UserRepository userRepository;
    private final CloudinaryService cloudinaryService;

    @Transactional
    public AgencyResponse createAgency(Long ownerId, AgencyRequest request) {
        if (agencyRepository.existsByOwnerId(ownerId)) {
            throw new IllegalStateException("This user already has an agency profile");
        }
        User owner = userRepository.findById(ownerId)
                .orElseThrow(() -> new ResourceNotFoundException("User not found"));

        Agency agency = Agency.builder()
                .owner(owner)
                .name(request.getName())
                .contactEmail(request.getContactEmail())
                .contactPhone(request.getContactPhone())
                .city(request.getCity())
                .description(request.getDescription())
                .build();

        return AgencyResponse.fromEntity(agencyRepository.save(agency));
    }

    @Transactional
    public AgencyResponse updateAgency(Long ownerId, AgencyRequest request) {
        Agency agency = getOwnedAgency(ownerId);
        agency.setName(request.getName());
        agency.setContactEmail(request.getContactEmail());
        agency.setContactPhone(request.getContactPhone());
        agency.setCity(request.getCity());
        agency.setDescription(request.getDescription());
        return AgencyResponse.fromEntity(agencyRepository.save(agency));
    }

    @Transactional
    public AgencyResponse updateLogo(Long ownerId, MultipartFile logoFile) {
        Agency agency = getOwnedAgency(ownerId);
        CloudinaryService.UploadResult result = cloudinaryService.upload(logoFile, "agencies/logos");
        agency.setLogo(result.url());
        return AgencyResponse.fromEntity(agencyRepository.save(agency));
    }

    @Transactional(readOnly = true)
    public AgencyResponse getByOwnerId(Long ownerId) {
        return AgencyResponse.fromEntity(getOwnedAgency(ownerId));
    }

    @Transactional(readOnly = true)
    public AgencyResponse getById(Long agencyId) {
        Agency agency = agencyRepository.findById(agencyId)
                .orElseThrow(() -> new ResourceNotFoundException("Agency not found"));
        return AgencyResponse.fromEntity(agency);
    }

    Agency getOwnedAgency(Long ownerId) {
        return agencyRepository.findByOwnerId(ownerId)
                .orElseThrow(() -> new ResourceNotFoundException("Agency profile not found for this user"));
    }
}
