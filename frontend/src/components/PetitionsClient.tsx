'use client';

import { User } from '@supabase/supabase-js';
import { Organization } from '@/lib/types/database';
import { useRouter } from 'next/navigation';

interface PetitionWithVault {
  id: string;
  petition_title: string;
  petition_description: string;
  requested_amount: number;
  project_location: string;
  beneficiaries_count: number;
  project_timeline: string;
  expected_impact: string;
  status: string;
  approved_amount?: number;
  funded_amount?: number;
  review_notes?: string;
  created_at: string;
  fund_vaults: {
    vault_name: string;
    disaster_type: string;
    location: string;
  };
}

interface PetitionsClientProps {
  user: User;
  organization: Organization;
  petitions: PetitionWithVault[];
}

export default function PetitionsClient({ user, organization, petitions }: PetitionsClientProps) {
  const router = useRouter();

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'approved':
        return 'bg-green-500/20 text-green-800 border border-green-500/30';
      case 'funded':
        return 'bg-blue-500/20 text-blue-800 border border-blue-500/30';
      case 'rejected':
        return 'bg-red-500/20 text-red-800 border border-red-500/30';
      case 'under_review':
        return 'bg-yellow-500/20 text-yellow-800 border border-yellow-500/30';
      default:
        return 'bg-gray-500/20 text-gray-800 border border-gray-500/30';
    }
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Divine Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#d4af8c] via-[#c9a876] to-[#b8956a]"></div>
        <div className="absolute inset-0 opacity-60">
          <img 
            src="/assets/clouds.PNG" 
            alt="Divine Clouds" 
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-8">
        {/* Header */}
        <div className="mb-12">
          <button
            onClick={() => router.push('/events')}
            className="text-gray-800 hover:text-gray-900 mb-6 flex items-center bg-white/20 backdrop-blur-md rounded-full px-4 py-2 transition-all duration-300 font-['Cinzel']"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Events
          </button>
          
          <div className="bg-white/10 backdrop-blur-xl rounded-3xl border border-white/20 p-8 shadow-2xl text-center">
            <h1 className="text-3xl font-bold text-gray-900 mb-4 font-['Cinzel'] tracking-wide">My Petitions</h1>
            <p className="text-gray-700 text-lg font-['Cinzel']">
              Track the status of your fund requests for {organization.organization_name}
            </p>
          </div>
        </div>

        {/* Petitions List */}
        {petitions.length === 0 ? (
          <div className="bg-white/10 backdrop-blur-xl rounded-3xl border border-white/20 p-12 shadow-2xl text-center">
            <div className="w-20 h-20 bg-gray-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-10 h-10 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-4 font-['Cinzel']">No Petitions Yet</h3>
            <p className="text-gray-700 mb-8 text-lg font-['Cinzel']">
              You haven't submitted any fund petitions yet. Visit the events page to browse available relief missions.
            </p>
            <button
              onClick={() => router.push('/events')}
              className="bg-gradient-to-r from-[#ffd700] to-[#ffed4e] hover:from-[#ffed4e] hover:to-[#ffd700] text-gray-900 px-8 py-4 rounded-xl font-semibold font-['Cinzel'] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-[1.02]"
            >
              Browse Relief Missions
            </button>
          </div>
        ) : (
          <div className="space-y-8">
            {petitions.map((petition) => (
              <div key={petition.id} className="bg-white/10 backdrop-blur-xl rounded-3xl border border-white/20 p-8 shadow-2xl hover:shadow-3xl transition-all duration-300">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h3 className="text-2xl font-semibold text-gray-900 mb-3 font-['Cinzel']">{petition.petition_title}</h3>
                    <div className="flex items-center space-x-4 text-sm text-gray-700">
                      <span className="font-['Cinzel']">Fund: {petition.fund_vaults.vault_name}</span>
                      <span>•</span>
                      <span className="font-['Cinzel']">Submitted: {new Date(petition.created_at).toLocaleDateString()}</span>
                    </div>
                  </div>
                  <span className={`inline-flex px-4 py-2 text-sm font-semibold rounded-full font-['Cinzel'] ${getStatusColor(petition.status)}`}>
                    {petition.status?.replace('_', ' ').toUpperCase()}
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
                  <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-4 border border-white/30">
                    <h4 className="text-xs font-semibold text-gray-600 mb-2 font-['Cinzel']">Requested Amount</h4>
                    <p className="text-xl font-bold text-gray-900 font-['Cinzel']">${petition.requested_amount.toLocaleString()}</p>
                  </div>
                  <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-4 border border-white/30">
                    <h4 className="text-xs font-semibold text-gray-600 mb-2 font-['Cinzel']">Project Location</h4>
                    <p className="text-xl font-bold text-gray-900 font-['Cinzel']">{petition.project_location}</p>
                  </div>
                  <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-4 border border-white/30">
                    <h4 className="text-xs font-semibold text-gray-600 mb-2 font-['Cinzel']">Beneficiaries</h4>
                    <p className="text-xl font-bold text-gray-900 font-['Cinzel']">{petition.beneficiaries_count.toLocaleString()}</p>
                  </div>
                  <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-4 border border-white/30">
                    <h4 className="text-xs font-semibold text-gray-600 mb-2 font-['Cinzel']">Timeline</h4>
                    <p className="text-xl font-bold text-gray-900 font-['Cinzel']">{petition.project_timeline}</p>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="text-base font-semibold text-gray-800 mb-3 font-['Cinzel']">Project Description</h4>
                  <p className="text-gray-700 font-['Cinzel'] leading-relaxed">{petition.petition_description}</p>
                </div>

                <div className="mb-6">
                  <h4 className="text-base font-semibold text-gray-800 mb-3 font-['Cinzel']">Expected Impact</h4>
                  <p className="text-gray-700 font-['Cinzel'] leading-relaxed">{petition.expected_impact}</p>
                </div>

                {petition.approved_amount && (
                  <div className="bg-green-500/10 backdrop-blur-sm border border-green-500/20 rounded-2xl p-4 mb-6">
                    <h4 className="text-sm font-semibold text-green-800 mb-2 font-['Cinzel']">Approved Amount</h4>
                    <p className="text-2xl font-bold text-green-900 font-['Cinzel']">${petition.approved_amount.toLocaleString()}</p>
                  </div>
                )}

                {petition.funded_amount && (
                  <div className="bg-blue-500/10 backdrop-blur-sm border border-blue-500/20 rounded-2xl p-4 mb-6">
                    <h4 className="text-sm font-semibold text-blue-800 mb-2 font-['Cinzel']">Funded Amount</h4>
                    <p className="text-2xl font-bold text-blue-900 font-['Cinzel']">${petition.funded_amount.toLocaleString()}</p>
                  </div>
                )}

                {petition.review_notes && (
                  <div className="bg-yellow-500/10 backdrop-blur-sm border border-yellow-500/20 rounded-2xl p-4">
                    <h4 className="text-sm font-semibold text-yellow-800 mb-2 font-['Cinzel']">Review Notes</h4>
                    <p className="text-yellow-700 font-['Cinzel'] leading-relaxed">{petition.review_notes}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
} 